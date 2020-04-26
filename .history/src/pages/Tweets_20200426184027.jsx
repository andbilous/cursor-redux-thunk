import React from 'react'
import {connect} from 'react-redux'
import {getTWEETs} from '../redux/tweets/actions'


const Tweets = (props) => {
  return (
    <div>Tweets</div>
  )
}

const TweetsContainer = connect(
  (state) => ({
      tweets: state.tweetsReducer.tweets
  }), (dispatch) => ({
     getTweets: dispatch(getTWEETs())
  })
)(Tweets);

export { TweetsContainer as Tweets };
