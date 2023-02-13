import {foreach, http400Call, httpCall, HttpErrorReponseObject, httpOkCall, sum} from "./utils";
import {CatEvent} from "../shared/CatEvent";

test('utils of 2 and 3 must returns 5', () => {
    expect(sum(2, 3)).toBe(5);
});

describe('foreach mock tests', () => {
    let mockCallback: jest.Mock;
    beforeAll(() => {
        mockCallback = jest.fn(x => x + 42);
    });
    test('foreach mock function', () => {
        foreach([0, 1, 2], mockCallback);
        expect(mockCallback).toBeCalledTimes(3);
    });
});

describe('httpCall test', () => {
    test('If call is OK then return events object', async () => {
        const data: CatEvent[] = await httpCall('https://cat-fact.herokuapp.com/facts');
        console.log(data);
        expect(data.length).toBeGreaterThan(0);
    });
    test('If call is to non existing endpoint, then return error object', async () => {
        const response: HttpErrorReponseObject = await httpCall('https://cat-fact.herokuapp.com/fac');
        console.log(response);
        expect(response.message).toBe('4XX Error');
    });
});