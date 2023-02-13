import React, {useEffect} from "react";
import {User} from "../shared/User";

interface ListParams {
    users: User[];

}
export function SupUsersList({users}: ListParams) {

    return (
        <table>
            <thead>
            <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody data-testid="table-body">
            {users.map((user, i) =>
                <tr key={i}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.username}</td>
                </tr>)}
            </tbody>
        </table>
    );
}