import React from 'react'


const AddUser = () => {
  return (
    <div>Add Users</div>
  )
}
const UsersContainer = connect(
  (state) => ({
     users: state.usersReducer.users
  }), (dispatch) => ({
     getUsers: dispatch(getUsers())
  })
)(Users);

export default AddUser;