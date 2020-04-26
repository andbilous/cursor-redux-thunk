import React from 'react'
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {getUsers} from '../redux/users/actions'


const AddUser = () => {
  return (
    <div>Add Users</div>
  )
}
const AddUserContainer = connect(
  (state) => ({
     users: state.usersReducer.users
  }), (dispatch) => ({
     getUsers: dispatch(getUsers())
  })
)(AddUser);

export {AddUserContainer as AddUser};
