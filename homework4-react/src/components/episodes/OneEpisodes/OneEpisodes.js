import {Link} from "react-router-dom";

export function OneEpisodes({one,url}){
    return(
        <div>
            {
                <Link to={url+'/'+one.id}>{one.title}</Link>
            }
        </div>
    )
}