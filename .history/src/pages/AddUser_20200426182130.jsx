import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {getUsers} from '../redux/users/actions'


const AddUser = () => {
  const [name,setName] = useState('');
  const [userName,setUserName] = useState('');
  const [avatar,setAvatar] = useState('');
  return (
    <Form inline>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="name" className="mr-sm-2">Name</Label>
      <Input type="text" name="name" id="name" placeholder="Name" />
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="userName" className="mr-sm-2">User Name</Label>
      <Input type="text" name="userName" id="userName" placeholder="userName" />
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="exampleEmail" className="mr-sm-2">Ava</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
    </FormGroup>
    <Button>Submit</Button>
  </Form>
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
