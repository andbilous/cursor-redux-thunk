import React from 'react'


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

export {}

export default AddUser;