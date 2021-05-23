import {useEffect, useState} from "react";

export function UserPosts(props) {
    let {match: {params: {id}}} = props
    let [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/user/' + id + '/posts')
            .then(value => value.json())
            .then(value => setUser(value))
    }, [id]);
    return (
        <div>
            <hr/>
            <h2>Comments Post {id}</h2>

            {
                user && <p>
                    {
                        user.map(value => <p><h2>{value.id}-{value.title}</h2>
                            <h3>{value.body}</h3></p>)
                    }

                </p>

            }
            <hr/>
        </div>
    )
}