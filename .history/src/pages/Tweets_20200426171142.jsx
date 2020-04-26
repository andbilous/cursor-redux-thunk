import React from 'react'
import {connect} from 'react-redux'


const Tweets = () => {
  return (
    <div>Tweets</div>
  )
}

const TweetsContainer = connect(
  (state) => ({
      
  }), (dispatch) => ({
     getUsers: dispatch(getUsers())
  })
)(Tweets);

export { TweetsContainer as Tweets };
