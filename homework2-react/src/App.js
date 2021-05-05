import './App.css';
import Cars from "./components/cars/code";
import {useState} from "react";

const carList = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw",
     model: "115", 
     year: 2013, 
     color: "red", 
     type: "hachback",
     engine: "f15",
     volume: 1.5, 
     power: 120},
    
    {producer: "bmw",
     model: "315",
     year: 2010,
     color: "white",
     type: "sedan",
     engine: "f15",
     volume: 1.5,
     power: 120},
    
    {producer: "bmw",
     model: "650", 
     year: 2009,
     color: "black",
     type: "coupe",
     engine: "f60",
     volume: 6,
     power: 350},
    
    {producer: "bmw",
     model: "320", 
     year: 2012,
     color: "red",
     type: "sedan",
     engine: "f20", 
     volume: 2, 
     power: 180},
    
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
]


function App() {
    let [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter += 100);
    const decrement = () => setCounter(counter -= 100);
    const reset = () => setCounter(counter = 0);

    let [car, setUsers] = useState(carList);

    const deleteCar = () => {
        car.pop();
        setUsers([...car]);

    }


    return (
        <div>
            counter is {counter}<br/>
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
            <button onClick={reset}>reset</button>
            {


                car.map((value, index) =>
                    <Cars key={index}
                          oneCar={value}


                    />
                )

            }
            <button onClick={deleteCar}>Delete</button>

        </div>
    )
}

console.log(carList);
export default App;
