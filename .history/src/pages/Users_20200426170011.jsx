import React, { useState } from 'react';
import connect from 'react-redux';



const Users = () => {
  const [users,setUsers] = useState([]);
  return (
    <div>Users</div>
  )
  const fetchUsers = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    setUsers(response.data);
  };
}


export default Users;