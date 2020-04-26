import React from 'react'


const Tweets = () => {
  return (
    <div>Tweets</div>
  )
}

const UsersContainer = connect(
  (state) => ({
      
  }), (dispatch) => ({
     getUsers: dispatch(getUsers())
  })
)(Users);

export { UsersContainer as Users };

export default Tweets;