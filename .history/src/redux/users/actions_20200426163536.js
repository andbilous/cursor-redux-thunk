import types from './types';
import usersApi from '../../A'

export const getUsers = () => async (dispatch) => {
    dispatch(fetchStart());
    const data = await airportAPI.getAirplanes();
    const aircraftData =  await aircraftAPI.getAircrafts();
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