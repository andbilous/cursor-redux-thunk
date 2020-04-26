import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {Users} from './pages/Users';
import {AddUser} from './pages/AddUser';
import {Tweets} from './pages/Tweets';
import {AddTweet} from './pages/AddTweet';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <Router>
      <div>
          <ul className="menu-main">
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/addUser">Add User</NavLink></li>
            <li><NavLink to="/tweets">Tweets</NavLink></li>
            <li><NavLink to="/addTweet">Add Tweet</NavLink></li>
          </ul>
      
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/addUser">
            <AddUser />
          </Route>
          <Route path="/tweets">
            <Tweets />
          </Route>
          <Route path="/addTweet">
            <AddTweet />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    </Provider>
  );
}

export default App;
