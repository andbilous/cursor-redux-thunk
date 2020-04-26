import types from './types';
import usersAPI from '../../API/users.api';

export const getUsers = () => async (dispatch) => {
    dispatch(getUsersStart());
    const res = await usersAPI.getUsers();
    if(res.status===200){
        dispatch(getUsersSuccess(res.data.data));
    }else{
        dispatch(getUsersFailure());
    }
};

export const addUser = (data) => async (dispatch) => {
    dispatch(addUserStartAsync());
    const res = await usersAPI.addUser(data);
    if(res.success===201) {
            dispatch(addUserSuccessAsync(res.data));
        }else{
            dispatch(addUserFailureAsync());
        }
    };

const getUsersStart = () =>({
    type: types.GET_USERS_START
})
const getUsersSuccess = (data) =>({
    type: types.GET_USERS_SUCCESS,
    payload: data
})
const getUsersFailure = () =>({
    type: types.GET_USERS_FAILURE,
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

