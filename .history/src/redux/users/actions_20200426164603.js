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
    console.log(data)
    const res = await airportAPI.createAirport(data);
    console.log(res.id);

    if(res.id) {
        const data = await airportAPI.getAirports();
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