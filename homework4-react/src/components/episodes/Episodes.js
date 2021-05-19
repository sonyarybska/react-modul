import {useEffect, useState} from "react";
import {OneEpisodes} from "./OneEpisodes/OneEpisodes";

export function Episodes({match:{url}}){
    let [episodes,setEpisodes]=useState([]);
    useEffect(()=>{
        fetch('https://api.sampleapis.com/futurama/episodes ')
            .then(value => value.json())
            .then(data=>setEpisodes([...data]))
    },[])
    return(
        <div>{
            episodes.map(value => <OneEpisodes key={value.id} one={value} url={url}/>)
        }
        </div>
    )
}