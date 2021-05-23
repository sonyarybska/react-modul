import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}
    from "react-router-dom";
import './App.css';
import {Characters} from "./components/characters/Characters";
import {Inventory} from "./components/inventory/Inventory";
import {InventoryDetails} from "./components/inventory/inventoryDetails/InventoryDetails";
import {Episodes} from "./components/episodes/Episodes";
import {EpisodesDetails} from "./components/episodes/EpisodesDetails/EpisodesDetails";
import {CharacterDetails} from "./components/characterDetails/CharacterDetails";

function App() {

    return (
        <div className="App">
            <Router>
                <Link to='/characters'><h1>characters</h1></Link>
                <Link to='/inventory'><h1>inventory</h1></Link>
                <Link to='/episodes'><h1>episodes</h1></Link>
                <Switch>
                    <Route exact={true} path={'/characters'} render={(props) => {
                        return <Characters {...props}/>
                    }}/>

                    <Route exact={true} path={'/inventory'} render={(props) => {
                        return <Inventory{...props}/>
                    }}/>
                    <Route exact={true} path={'/inventory/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <InventoryDetails inventoryID={id}/>
                    }}/>

                    <Route exact={true} path={'/episodes'} render={(props) => <Episodes {...props}/>}/>
                    <Route exact={true} path={'/episodes/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <EpisodesDetails {...props} episodeID={id}/>
                    }}/>
                    }/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
