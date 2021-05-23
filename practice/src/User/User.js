import {Link} from "react-router-dom";

export function User({one}){
    return(
        <div>
            {
              <Link to={{pathname:'/users/'+one.id,state:one}}><h2>{one.first_name} {one.last_name}</h2></Link>
            }

        </div>
    )
}