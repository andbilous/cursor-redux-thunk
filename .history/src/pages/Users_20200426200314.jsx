import React, {useEffect } from 'react';
import { connect } from 'react-redux';
import {getUsers} from '../redux/users/actions';
import User from '../components/User'


const Users = (props) => {
  useEffect( () => { 
    props.getUsers() 
  },[]);
  return (
  <div style={{marginLeft:'40%'}}>
    {props.users.map(user=>{
  return (
    <User 
    avatar={user.avatar}
    name={user.name}
    username={user.user}
    />
  )
  })}
  </div>
  )

}
const UsersContainer = connect(
  (state) => ({
     users: state.usersReducer.users
  }), (dispatch) => ({
     getUsers: ()=> dispatch(getUsers())
  })
)(Users);

export { UsersContainer as Users };