import axios from 'axios';

const usersAPI = {
  getUsers:  async () => {
      return  await axios.get('77.120.108.119:9999/users').then(res => {
        return res.data;
    });
},
  addUser: async (data) => {
   return await axios.post('/login', {
      firstName: 'Finn',
      lastName: 'Williams'
    })
    .then((response) => {
     return response
    }, (error) => {
      console.log(error);
    });
  }
}

export default usersAPI;