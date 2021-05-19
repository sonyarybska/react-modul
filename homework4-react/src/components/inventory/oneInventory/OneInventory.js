import {Link} from "react-router-dom";

export function OneInventory({one,url}){
    return(
        <div>
            <Link to={url+'/'+one.id}><h3>{one.title}</h3></Link>
        </div>
    )
}