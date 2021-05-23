import {useEffect, useState} from "react";
import {Post} from "../post/Post";

import {Route} from "react-router-dom";
import {PostsComments} from "../PostsComments/PostsComments";

export function Posts(props){
   let {match:{url}}=props;
    let [posts,setPosts]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(data=>setPosts(data))},[])
    return(
        <div>

            <hr/>
            <Route path={'/posts/:id/comments'} component={PostsComments}/>
            <hr/>
            {
                posts.map(value => <Post key={value.id} one={value} url={url}/>)
            }


        </div>
    )
}