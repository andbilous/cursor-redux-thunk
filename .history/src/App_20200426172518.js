import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Users} from './pages/Users';
import {AddUser} from './pages/AddUser';

function App() {
  return (
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
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
