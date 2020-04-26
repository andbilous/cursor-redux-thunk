import types from './types';

export const getUser = (post)=>({
    type:  types.ADD_POST,
    payload: post
})


export const fetchAirplanes = () => async (dispatch) => {
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