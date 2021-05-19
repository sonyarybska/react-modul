import {useEffect, useState} from "react";
import {Post} from "./post/Post";
import './style.css'
import {getUsers} from "../../services/api";

export function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setPosts([...value.data]));
    },[])

    let [singlePost, setSinglePost] = useState(null);

    let details = (id) => {
        let details = posts.find(value => value.id === id);
        setSinglePost(details)
    }
    return (
        <div className={'main'}>
            <div className={'info'}>
                {
                    posts.map(value => <Post key={value.id} onePost={value}
                                             details={details}/>)
                }
            </div>
            <div className={'details'}>
                {
                    singlePost ? <h1> UserID: {singlePost.userId} Body: {singlePost.body}</h1> :
                        <h1>Posts are undefined</h1>
                }
            </div>
        </div>
    )
}