import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {g} from '../redux/tweets/actions'


const Tweets = (props) => {
  useEffect( () => { 
    props.getTweets() 
  },[]);
  return (
  <div>
    {props.tweets.map(tweet=>{
  return <div>{tweet.content}</div>
  })}
  </div>
  )
}

const TweetsContainer = connect(
  (state) => ({
      tweets: state.tweetsReducer.tweets
  }), (dispatch) => ({
     getTweets:()=> dispatch(getTWEETs())
  })
)(Tweets);

export { TweetsContainer as Tweets };
