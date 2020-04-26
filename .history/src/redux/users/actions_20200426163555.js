import types from './types';
import usersApi from '../../API/users.api';
import usersAPI from '../../API/users.api';

export const getUsers = () => async (dispatch) => {
    dispatch(fetchStart());
    const data = await usersAPI.getUsers();

    let updatedWithAircraft = data.map((plane)=>{
        if(aircraftData[0].id){
            plane.aircraftId = aircraftData[0].id;
            return plane;
        }
        return  plane;

    });
    if(data){
        dispatch(fetchSuccess(updatedWithAircraft));
    }else{
    }
};