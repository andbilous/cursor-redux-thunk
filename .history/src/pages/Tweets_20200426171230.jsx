import React from 'react'
import {connect} from 'react-redux'
import {getTWEETs} from '../redux/tweets/actions'


const Tweets = () => {
  return (
    <div>Tweets</div>
  )
}

const TweetsContainer = connect(
  (state) => ({
      
  }), (dispatch) => ({
     getUsers: dispatch(ge())
  })
)(Tweets);

export { TweetsContainer as Tweets };
