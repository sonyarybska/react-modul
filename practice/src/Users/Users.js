import {useEffect, useState} from "react";
import {User} from "../User/User";
import {UsersDetails} from "../UsersDetails/UsersDetails";
import {Link, Route} from "react-router-dom";



export function Users(props) {
     let {location:{search}}=props;

    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://reqres.in/api/users'+search)
            .then(value => value.json())
            .then(data=>setUsers(data.data))
    }, [search])

    return (
        <div>
            {
                users.map(value =><User key={value.id} one={value}/>)
            }
            <Link to={{pathname: '/users', search: '?page=1'}}>
                <button>Page 1</button>
            </Link>
            <Link to={{pathname: '/users', search: '?page=2'}}>
                <button>Page 2</button>
            </Link>
            <Route path={'/users/:id'} component={UsersDetails}/>
        </div>
    )
}