import {useState, useEffect} from 'react';
import {OneInventory} from "./oneInventory/OneInventory";

export function Inventory({match: {url}}) {

    let [inventory, setInventory] = useState([]);
    useEffect(() => {
        fetch(' https://api.sampleapis.com/futurama/inventory')
            .then(value => value.json())
            .then(data => setInventory([...data]))
    }, [])


    return (
        <div>{
            inventory.map(value => <OneInventory key={value.id} one={value}
                                                 url={url}/>)
        }
        </div>
    )
}