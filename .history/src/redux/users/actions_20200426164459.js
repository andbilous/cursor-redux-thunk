import types from './types';
import usersApi from '../../API/users.api';
import usersAPI from '../../API/users.api';

export const getUsers = () => async (dispatch) => {
    dispatch(ge());
    const data = await usersAPI.getUsers();
    if(data){
        dispatch(fetchSuccess(updatedWithAircraft));
    }else{

    }
};

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