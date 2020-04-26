import React,{useState} from 'react'
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {addTWEET} from '../redux/tweets/actions'


export const AddTweet = () => {
  const [userId,setUserId] = useState('James');
  const [content,setContent] = useState('Deen');
  const [image,setImage] = useState(
    `https://i.picsum.photos/id/${Math.floor(Math.random() * (500 - 6) + 5)}/200/300.jpg`
    );
  return (
    <Form inline>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="userId" className="mr-sm-2">User ID</Label>
      <Input type="number" value={userId} onChange={(e)=>setUserId(e.target.value)}
        name="userId" id="userId" placeholder="UserId" />
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="content" className="mr-sm-2">content</Label>
      <Input value={content} onChange={(e)=>setContent(e.target.value)} 
       type="text" name="content" id="content" placeholder="content" />
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="avatar" className="mr-sm-2">Avatar</Label>
      <Input value={image} onChange={(e)=>setImage(e.target.value)} type="text" name="avatar" id="avatar" placeholder="http://" />
    </FormGroup>
    <Button onClick={
      ()=>{
        props.addUser({
          name,username,avatar
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




const AddUser = (props) => {
  return (
    <Form inline>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="name" className="mr-sm-2">Name</Label>
      <Input type="text" value={name} onChange={(e)=>setName(e.target.value)}  name="name" id="name" placeholder="Name" />
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="userName" className="mr-sm-2">User Name</Label>
      <Input value={username} onChange={(e)=>setUserName(e.target.value)}  type="text" name="userName" id="userName" placeholder="userName" />
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="avatar" className="mr-sm-2">Avatar</Label>
      <Input value={avatar} onChange={(e)=>setAvatar(e.target.value)} type="text" name="avatar" id="avatar" placeholder="http://" />
    </FormGroup>
    <Button onClick={
      ()=>{
        props.addUser({
          name,username,avatar
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
