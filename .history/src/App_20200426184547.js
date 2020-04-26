import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {Users} from './pages/Users';
import {AddUser} from './pages/AddUser';
import {Tweets} from './pages/Tweets';
import {} from './pages/AddTweet';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/addUser">Add User</Link>
            </li>
        
          </ul>
        </nav>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/addUser">
            <AddUser />
          </Route>
          <Route path="/tweets">
            <AddUser />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    </Provider>
  );
}

export default App;
