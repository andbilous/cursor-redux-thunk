import types from './types';
import TWEETsAPI from '../../API/TWEETs.api';
import tweetsAPI from '../../API/TWEETs.api';

export const getTWEETs = () => async (dispatch) => {
    dispatch(getTWEETsStart());
    const data = await tweetsAPI.getTweets();
    if(data){
        dispatch(getTWEETsSuccess(data));
    }else{
        dispatch(getTWEETsFailure());
    }
};

export const addTWEET = (data) => async (dispatch) => {
    dispatch(addTWEETStartAsync());
    const res = await TWEETsAPI.addTWEET(data);
    if(res) {
        if(data){
            dispatch(addTWEETSuccessAsync(data));
        }else{
            dispatch(addTWEETFailureAsync());
        }
    }};

const getTWEETsStart = () =>({
    type: types.GET_TWEETS_START
})
const getTWEETsSuccess = (data) =>({
    type: types.GET_TWEETS_START,
    payload: data
})
const getTWEETsFailure = () =>({
    type: types.GET_TWEETS_START,
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

