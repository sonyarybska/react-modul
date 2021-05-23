export function UsersDetails(props){
    console.log(props);
    let {location:{state}}=props;
    return(
        <div>
            <h1>User Id: {state.id}</h1>
               <h1> Email:{state.email}</h1>
            <img src={state.avatar} alt=""/>
        </div>
    )
}