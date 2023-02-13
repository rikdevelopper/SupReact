import React, {useEffect, useState} from "react";
import {User} from "../shared/User";
import {CatEvent} from "../shared/CatEvent";
import {httpOkCall} from "../util/utils";



export function CatEventList() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
       httpOkCall().then((data) => console.log(data));
    });
    return (
        <table>
            <thead>
            <tr>
                <th>User</th>
                <th>Texte</th>
                <th>Source</th>
            </tr>
            </thead>
            <tbody data-testid="table-body">

            </tbody>
        </table>
    );
}