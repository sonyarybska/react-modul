import './style.css';
export function Post({onePost,details}){
    return(
        <div className={'still'}>
        <div className={'one'}>
            {onePost.id}-
            {onePost.title}
        </div>
            <button onClick={()=>details(onePost.id)}>Details</button>
        </div>
    )
}