import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import UIfx from 'uifx'; 
import {getTWEETs} from '../redux/tweets/actions'
import {getUsers} from '../redux/users/actions';
import Tweet from '../components/Tweet';
import {addTWEET} from '../redux/tweets/actions'
import socket from '../utils/socket';
import tick from '../assets/tick.mp3';

const tickSample = new UIfx({asset: tick});

const Tweets = (props) => {
  useEffect( () => { 
    props.getTweets() 
    socket.on('new-tweet',(tweet)=>{
      props.addTweet(tweet);
      tickSample.play();
    })
  },[]);
  return (
  <div style={{marginLeft:'40%'}}>
    {props.tweets.map(tweet=>{
  return (
    <Tweet 
    key={tweet.id}
    name={props.users.filter(user=>user.id===tweet.userId)[0].name}
    username={props.users.filter(user=>user.id===tweet.userId)[0].username}
    content={tweet.content}
    image={tweet.image}
    />
  )
 
  })}
  </div>
  )
}

const TweetsContainer = connect(
  (state) => ({
      tweets: state.tweetsReducer.tweets,
      users: state.usersReducer.users
  }), (dispatch) => ({
     getTweets:()=> dispatch(getTWEETs()),
     getUsers: ()=> dispatch(getUsers()),
     addTweet:(data)=> dispatch(addTWEET(data))
  })
)(Tweets);

export { TweetsContainer as Tweets };
