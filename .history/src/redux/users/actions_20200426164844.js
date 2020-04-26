import types from './types';
import usersAPI from '../../API/users.api';

export const getUsers = () => async (dispatch) => {
    dispatch(getUsersStart());
    const data = await usersAPI.getUsers();
    if(data){
        dispatch(getUsersSuccess(data));
    }else{
        dispatch(getUsersFailure());
    }
};

export const addUser = (data) => async (dispatch) => {
    dispatch(ad);
    const res = await usersAPI.addUser(data);
    if(res) {
        if(data){
            dispatch(fetchSuccess(data));
        }else{
            // dispatch(fetchFailure())
            // data.id=res.id;
            // dispatch(addAirport(data));
        }
    }};

const getUsersStart = () =>({
    type: types.GET_USERS_START
})
const getUsersSuccess = (data) =>({
    type: types.GET_USERS_START,
    payload: data
})
const getUsersFailure = () =>({
    type: types.GET_USERS_START,
    payload: 'error'
})

const addUserStartAsync = () =>({
    type: types.ADD_USER_START
})
const addUserSuccessAsync = (data) =>({
    type: types.ADD_USER_SUCCESS,
    payload: data
})
const addUserFailureAsync = () =>({
    type: types.ADD_USER_FAILURE,
    payload: 'error'
})
