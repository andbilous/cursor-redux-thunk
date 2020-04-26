import types from './types';
import tweetsAPI from '../../API/tweets.api';

export const getTWEETs = () => async (dispatch) => {
    dispatch(getTWEETsStart());
    const res = await tweetsAPI.getTweets();
    if(res.status===200){
        dispatch(getTWEETsSuccess(res.data));
    }else{
        dispatch(getTWEETsFailure());
    }
};

export const addTWEET = (data) => async (dispatch) => {
    dispatch(addTWEETStartAsync());
    const res = await tweetsAPI.addTWEET(data);
    if(res) {
            dispatch(addTWEETSuccessAsync(res.data.data));
        }else{
            dispatch(addTWEETFailureAsync());
        }
    };

const getTWEETsStart = () =>({
    type: types.GET_TWEETS_START
})
const getTWEETsSuccess = (data) =>({
    type: types.GET_TWEETS_SUCCESS,
    payload: data
})
const getTWEETsFailure = () =>({
    type: types.GET_TWEETS_FAILURE,
    payload: 'error'
})

const addTWEETStartAsync = () =>({
    type: types.ADD_TWEET_START
})
const addTWEETSuccessAsync = (data) =>({
    type: types.ADD_TWEET_SUCCESS,
    payload: data
})
const addTWEETFailureAsync = () =>({
    type: types.ADD_TWEET_FAILURE,
    payload: 'error'
})

