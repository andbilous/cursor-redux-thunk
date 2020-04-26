import React, { useState } from 'react';
import connect from 'react-redux';



const Users = () => {
  const [users,setUsers] = useState([]);
  useEffect( () => { fetchUsers(users) }, [ users ] );
  return (
    <div>Users</div>
  )

}


export default Users;