import './App.css';
import {Users} from "./components/users/Users";
import {Posts} from "./components/posts/Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Link to={'/users'}><h2>Users</h2></Link>
                <Link to={'/posts'}><h2>Posts</h2></Link>
                <Switch>
                    <Route exact={true} path={'/users'} render={(props) => <Users {...props}/>}/>
                    <Route exact={true} path={'/posts'} render={() => <Posts/>}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
