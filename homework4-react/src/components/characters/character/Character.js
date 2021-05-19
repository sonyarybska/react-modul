
import {Link} from "react-router-dom";
export function Character({one,url}){
    if(!one.occupation){
        return '';
    }
    return(
        <div className={'charac'}>
            {
              <Link to={url+'/'+one.id} params={{post:one}}><h3>{ one.occupation}</h3></Link>
            }

        </div>
    )
}