import React from 'react';
import {
  BrowserRouter as Router,
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
      <div>
          <ul className="menu-main">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
            <li><NavLink to="/photos">Photos</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/photos" component={Photos}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/contacts" component={Contacts}/>
            {contacts.map((contact)=>{
              return (
                <Route path={`/contact/${contact.username}`} component={Contacts}/>
              )
    
            
            })}
          </div>
        </div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/addUser">Add User</Link>
            </li>
            <li>
              <Link to="/tweets">Tweets</Link>
            </li>
            <li>
              <Link to="/addTweet">Add Tweet</Link>
            </li>
        
          </ul>
        </nav> */}
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
