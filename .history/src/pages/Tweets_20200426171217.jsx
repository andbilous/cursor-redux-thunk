import React from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../redux/tweets/


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
