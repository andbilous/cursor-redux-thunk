import React, { useState,useEffect } from 'react';
import connect from 'react-redux';
import {getUsers} from '../redux/users/actions';


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
     getUsers: dispatch(getUsers()),
  })
)(Users);

export { UsersContainer as Users };
