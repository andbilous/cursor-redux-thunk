import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {addUser} from '../redux/users/actions'


const AddUser = (props) => {
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
      <Label for="avatar" className="mr-sm-2">Avatar</Label>
      <Input type="text" name="avatar" id="avatar" placeholder="Avatar" />
    </FormGroup>
    <Button onClick={
      ()=>{
        props.addUser({
          name
        })
    }}>Submit</Button>
  </Form>
  )
}
const AddUserContainer = connect(
  (state) => ({
     users: state.usersReducer.users
  }), (dispatch) => ({
     addUser:(data)=> dispatch(addUser(data))
  })
)(AddUser);

export {AddUserContainer as AddUser};
