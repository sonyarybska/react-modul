import {Link} from "react-router-dom";

export function User(props){
    let {one,url}=props;
    return(
        <div>


            {one.id}-{one.name}- <Link to={url+'/'+one.id}><button>Details</button></Link>

        </div>
    )
}