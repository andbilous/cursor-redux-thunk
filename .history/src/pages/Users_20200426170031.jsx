import React, { useState } from 'react';
import connect from 'react-redux';



const Users = () => {
  const [users,setUsers] = useState([]);
  return (
    <div>Users</div>
  )
  useEffect( () => { fetchUsers(users) }, [ users ] );
}


export default Users;