import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {getTWEETs} from '../redux/tweets/actions'


const Tweets = (props) => {
  useEffect( () => { 
    props.getT() 
  },[]);
  return (
  <div>
    {props.users.map(user=>{
  return <div>{user.name}</div>
  })}
  </div>
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
