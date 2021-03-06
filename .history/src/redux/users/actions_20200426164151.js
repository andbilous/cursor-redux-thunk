import types from './types';
import usersApi from '../../API/users.api';
import usersAPI from '../../API/users.api';

export const getUsers = () => async (dispatch) => {
    dispatch(fetchStart());
    const data = await usersAPI.getUsers();
    if(data){
        dispatch(fetchSuccess(updatedWithAircraft));
    }else{

    }
};

const getUsersStart = () =>({
    type: types.GET_USERS_START
})
const getUsersS = () =>({
    type: types.GET_USERS_START
})