import types from './types';
import usersAPI from '../../API/users.api';

export const getUsers = () => async (dispatch) => {
    dispatch(getUsersStart());
    const ку = await usersAPI.getUsers();
    if(data.success){
        dispatch(getUsersSuccess(data));
    }else{
        dispatch(getUsersFailure());
    }
};

export const addUser = (data) => async (dispatch) => {
    dispatch(addUserStartAsync());
    const res = await usersAPI.addUser(data);
    if(res) {
        if(data){
            dispatch(addUserSuccessAsync(data));
        }else{
            dispatch(addUserFailureAsync());
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

