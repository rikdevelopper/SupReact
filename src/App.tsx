import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SupButton from "./sup-button/SupButton";
import {SupUsersList} from "./sup-users-list/SupUsersList";
import {User} from "./shared/User";


function App() {

    const buildUsers = (): User[] => {
        const valentin: User = {firstName: 'Valentin', lastName: 'Dujardin', username: 'd.valentin'};
        const enguerrand: User = {firstName: 'Enguerrand', lastName: 'Harmel', username: 'h.enguerrand'};
        const ildevertdaisy: User = {firstName: 'Ildevertdaisy', lastName: 'Mboungou', username: 'm.ildevertdaisy'};
        return [valentin, enguerrand, ildevertdaisy];
    }
    const [defaultUsers, setUsers] = useState(buildUsers);

    function onSupBtnClick() {
        console.log('App click.');
        const ake: User = {firstName: 'ke', lastName: 'a', username: 'a.ke'};
        setUsers([...defaultUsers, ake]);
    }

    return (
        <div className="App">
            <SupButton text={'Click Me!'} onBtnClick={onSupBtnClick}/>
            <SupUsersList users={defaultUsers}/>
        </div>
    );
}

export default App;
