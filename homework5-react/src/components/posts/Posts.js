import {useEffect, useState} from "react";
import {Post} from "../post/Post";


export function Posts(){
    let [posts,setPosts]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(data=>setPosts(data))},[])

    return(
        <div>
            {
                posts.map(value => <Post key={value.id} one={value}/>)
            }
        </div>
    )
}