import {Link} from "react-router-dom";

export function Post(props){
    let {url,one}=props;
    return(
        <div>
            {one.title}  <Link to={{pathname:url+'/'+one.id+'/comments', state:one}}><button>Details</button></Link>

        </div>
    )
}