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
    name={props.users.filter(user=>user.id===tweet.userId)[]}
    username={'1'}
    content={tweet.content}
    image={tweet.image}
    />
    
  )
  //   {tweet.userId}
 
  })}
  </div>
  )
}

const TweetsContainer = connect(
  (state) => ({
      tweets: state.tweetsReducer.tweets,
      users: state.usersReducer.users
  }), (dispatch) => ({
     getTweets:()=> dispatch(getTWEETs())
  })
)(Tweets);

export { TweetsContainer as Tweets };
