import axios from 'axios';

const usersAPI = {
  getUsers:  async () => {
      return  await axios.get('http://77.120.108.119:9999/users/')
      .then((response) => {
        return response
       }, (error) => {
         console.log(error);
       });
},
  addUser: async (data) => {
   return await axios.post('http://77.120.108.119:9999/users/', {
      name: data.name,
      username: data.username,
      avatar: data.avatar
    })
    .then((response) => {
     return response
    }, (error) => {
      console.log(error);
    });
  }
}

export default usersAPI;