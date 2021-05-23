import {Link} from "react-router-dom";

export function Post({one,url}){
    return(
        <div>
            {one.title}  <Link to={{pathname:url+'/'+one.id, state:one}}><button>Details</button></Link>

        </div>
    )
}