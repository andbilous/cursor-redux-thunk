import React, {useEffect } from 'react';
import { connect } from 'react-redux';
import {getUsers} from '../redux/users/actions';
import User from 


const Users = (props) => {
  useEffect( () => { 
    props.getUsers() 
  },[]);
  return (
  <div style={{marginLeft:'40%'}}>
    {props.users.map(user=>{
  return (
    <Tweet 
    content={tweet.content}
    image={tweet.image}
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