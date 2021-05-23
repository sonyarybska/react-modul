import {useEffect, useState} from "react";

export function PostsComments(props) {
    console.log(props);
    let {match: {params: {id}}} = props
    let [post, setPost] = useState([]);
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/post/'+id+'/comments')
        .then(value => value.json())
        .then(value => setPost(value))
    }, [id]);
    return (

        <div>
           <h2>Posts user {id}</h2>
            {
              post.map(value => <p><h3>{value.id}-{value.name}</h3>
              <h4>{value.body}</h4></p>)
            }

        </div>
    )}