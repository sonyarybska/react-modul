import {useEffect, useState} from "react";

export function UserDetails(props) {
    let {match: {params: {id}}, location: {state}} = props
    let [user, setUser] = useState([]);
    useEffect(() => {
        setUser(state)
    }, [id]);
    let {email,phone,username,website}=user;
    return (
        <div>

            {
                user && <p>
                    <h2>Username:{username}</h2>
                    <h2>Email:{email}</h2>
                    <h2>Phone:{phone}</h2>
                    <h2>Website:{website}</h2>
                </p>

            }

        </div>
    )
}