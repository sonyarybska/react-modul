import {useEffect, useState} from "react";
import {Post} from "../post/Post";
import {PostDetails} from "../posts-details/postDetails";
import {Route} from "react-router-dom";

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
            <Route path={'/posts/:id'} component={PostDetails}/>
            <hr/>
            {
                posts.map(value => <Post key={value.id} one={value} url={url}/>)
            }


        </div>
    )
}