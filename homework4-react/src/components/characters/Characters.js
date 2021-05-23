import {useState, useEffect} from 'react';
import {Character} from "../character/Character"
import {Route} from "react-router-dom";
import {CharacterDetails} from "../characterDetails/CharacterDetails";

export function Characters({match: {url}}) {
    let [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch(' https://api.sampleapis.com/futurama/characters')
            .then(value => value.json())
            .then(data => setCharacters(data))
    }, [])


    return (
        <div>
            {
                characters.map(value => <Character key={value.id} one={value} url={url}/>)
            }
            <Route path={'/characters/:id'} component={CharacterDetails}/>
        </div>
    )
}