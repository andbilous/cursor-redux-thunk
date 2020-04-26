import React, { useState,useEffect } from 'react';
import connect from 'react-redux';
import {getUsers} from '../redux/users/actions';


const Users = () => {
  const [users,setUsers] = useState([]);

  useEffect( () => { 
    getUsers(users) 
  },
     [ users ] 
    );
  return (
    <div>Users</div>
  )

}
const UsersContainer = connect(
  (state) => ({
     users: state.usersReducer.users
  }), (dispatch) => ({
     getUsers: dispatch(getUsers())
  })
)(Users);

export { UsersContainer as Users };
