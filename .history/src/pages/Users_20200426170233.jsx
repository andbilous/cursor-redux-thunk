import React, { useState,useEffect } from 'react';
import connect from 'react-redux';


const Users = () => {
  const [users,setUsers] = useState([]);

  useEffect( () => { 
    fetchUsers(users) },
     [ users ] 
    );
  return (
    <div>Users</div>
  )

}
const UsersContainer = connect(
  (state) => ({
      currentLanguage: state.localizationReducer.currentLanguage,
      isLoggedIn: state.authReducer.isLoggedIn,
      aircrafts: state.aircraftsReducer.aircrafts,
      columns:  state.aircraftsReducer.columns,
      hasSavedValues: state.aircraftsReducer.hasSavedValues,
      inputs: state.aircraftsReducer.inputs,
      updatedAircraft: state.aircraftsReducer.updatedAircraft,
      isLoading : state.aircraftsReducer.isLoading
  }), (dispatch) => ({
      fetchAircrafts: () => dispatch(fetchAircrafts()),
      addAircraftAsync: (item) => dispatch(addAircraftAsync(item)),
       changeInput: (updatedObject) => dispatch(changeInput(updatedObject)),
       deleteAircraftAsync: (id) =>dispatch(deleteAircraftAsync(id)),
      updateAircraftAsync: (updatedAircraft)=>dispatch(updateAircraftAsync(updatedAircraft)),
       resetRows: () => dispatch(resetRows())
  })
)(Aircraft);
export { AircraftContainer as Aircraft };


export default Users;