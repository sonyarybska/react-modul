import {Link} from "react-router-dom";

export function User(props){
    let {one,url}=props;
    return(
        <div>

            {one.id}-{one.name}- <Link to={{pathname:url+'/'+one.id,state:one}}><button>Details</button></Link>


        </div>
    )
}