import {useEffect, useState} from "react";
import {User} from "../user/User";
import {
    Route,
} from "react-router-dom";
import {UserDetails} from "../user-details/UserDetails";

export function Users(props) {
    let {match: {url}} = props;

    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });

    }, [])
    return (
            <div>
                {users.map(value => <User key={value.id} one={value} url={url}/>)}
                <Route path={'/users/:id'} component={UserDetails}/>

            </div>

    )}
