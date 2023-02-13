import React from "react";
import {render, screen} from "@testing-library/react";
import {CatEventList} from "./cat-event-list";
import {User} from "../shared/User";

let defaultUsers: User[] = [];
const buildUsers = () => {
    const valentin: User = {firstName: 'Valentin', lastName: 'Dujardin', username: 'd.valentin'};
    const enguerrand: User = {firstName: 'Enguerrand', lastName: 'Harmel', username: 'h.enguerrand'};
    const ildevertdaisy: User = {firstName: 'Ildevertdaisy', lastName: 'Mboungou', username: 'm.ildevertdaisy'};
    defaultUsers = [valentin, enguerrand, ildevertdaisy];
}
describe('Test users list component', () => {
    beforeEach(() => buildUsers());
    test('should display all users passed', () => {
        render(<CatEventList users={defaultUsers}/>);
        const tableBody = screen.getByTestId('table-body');
        expect(tableBody.childNodes.length).toBe(defaultUsers.length);
    });

    test('should display all users passed in the right order', () => {
        render(<CatEventList users={defaultUsers}/>);
        const tableBody = screen.getByTestId('table-body');
        const firstNameColumnIndex = 0;
        const firstRowChildren = tableBody.childNodes.item(0).childNodes;
        expect(firstRowChildren.item(firstNameColumnIndex).textContent).toBe(defaultUsers[0].firstName);

        const lastRowIndex = defaultUsers.length - 1;
        const lastRowChildren = tableBody.childNodes.item(lastRowIndex).childNodes;
        expect(lastRowChildren.item(firstNameColumnIndex).textContent).toBe(defaultUsers[lastRowIndex].firstName);
    });
});