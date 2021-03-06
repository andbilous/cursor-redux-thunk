import React,{useState} from 'react'
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {addTWEET} from '../redux/tweets/actions'


 const AddTweet = (props) => {
  const [username,setUserName] = useState('');
  const [userId,setUserId] = useState(0);
  const [content,setContent] = useState('Some COntent');
  const [image,setImage] = useState(
    `https://i.picsum.photos/id/${Math.floor(Math.random() * (500 - 6) + 5)}/200/300.jpg`
    );
  return (
    <Form style={{marginLeft:'40%'}} inline>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="userId" className="mr-sm-2">User  :</Label>
      <Input 
      value={username}
      onChange={
        (e)=>{
          setUserName(e.target.value)
          setUserId(props.users.filter(user=>user.name===e.target.value)[0].id)
        }
      } 
      type="select" name="userId" id="userId">
        {props.users.map(user=>{
          return (
          <option key={Math.random()}>{user.name}</option>
          )
        })
      }
  
          </Input>
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
        props.addTweet({
          userId,content,image
        })
    }}>Submit</Button>
  </Form>
  )
}
const AddTweetContainer = connect(
  (state) => ({
     users: state.usersReducer.users
  }), (dispatch) => ({
     addTweet:(data)=> dispatch(addTWEET(data))
  })
)(AddTweet);

export {AddTweetContainer as AddTweet};


