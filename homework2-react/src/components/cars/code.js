export default function Cars({oneCar}) {
    const {producer, model, year, color, type, engine, volume, power} =oneCar;
    return (
        <div>
            <h1>{producer} {model}</h1>
            <p>
                Year: {year} <br/>
                Type: {type} <br/>
                Color: {color} <br/>
                Engine: {engine} <br/>
                Volume: {volume} <br/>
                Power: {power}
            </p>
        </div>
    )

}
