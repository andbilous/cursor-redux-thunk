import axios from 'axios';

const usersAPI = {
  getUsers:  async () => {
      return  await axios.get('77.120.108.119:9999/users').then(res => {
        return res.data;
    });
},
  addUser: async () => {
   return await axios.post('/login', {
      firstName: 'Finn',
      lastName: 'Williams'
    })
    .then((response) => {
     ret
    }, (error) => {
      console.log(error);
    });
  }
}

export default usersAPI;