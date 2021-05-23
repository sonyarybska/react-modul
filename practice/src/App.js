import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import {Users} from "./Users/Users";
import {UsersDetails} from "./UsersDetails/UsersDetails";

function App() {
    return (
        <div className="App">
            <Router>

                <Switch>
                    <Route exact path='/' component={Users}/>
                    <Route  path='/users' component={Users}/>
                    <Route  path='/users' component={Users}/>
                </Switch>

            </Router>

        </div>
    );
}

export default App;
