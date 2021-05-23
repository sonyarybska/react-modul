import {Link} from "react-router-dom";

export function User(props){
    let {one,url}=props;
    return(
        <div>

            {one.id}-{one.name}- <Link to={{pathname:url+'/'+one.id+'/posts',state:one}}><button>UserPosts</button></Link>


        </div>
    )
}