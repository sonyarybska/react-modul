import {useEffect, useState} from "react";

export function PostDetails(props) {
    console.log(props);
    let {match: {params: {id}}, location: {state}} = props
    let [post, setPost] = useState([]);
    useEffect(() => {
        setPost(state)
    }, [id]);
    return (

        <div>
            {
                post && <h2>{post.id}-{post.title}</h2>
            }

        </div>
    )}