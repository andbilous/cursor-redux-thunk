import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {getTWEETs} from '../redux/tweets/actions'
import Tweet from '../components/Tweet'


const Tweets = (props) => {
  useEffect( () => { 
    props.getTweets() 
  },[]);
  return (
  <div style={{marginLeft:'40%'}}>
    {props.tweets.map(tweet=>{
  return (
    <Tweet 
    content=
    />
    <div>
      {tweet.content}
      {tweet.userId}
      {tweet.image}
    </div>
  )
 
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
