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
            {events.map((event, i) =>
                <tr key={i}>
                    <td>{event.user}</td>
                    <td>{event.text}</td>
                    <td>{event.source}</td>
                </tr>)}
            </tbody>
        </table>
    );
}