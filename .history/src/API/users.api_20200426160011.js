import axios from 'axios';

const usersAPI = {
  getUsers:  async () => {
      return  await axios.get('77.120.108.119:9999/users').then(res => {
        return res.data;
    });
},
  addUser: as
}

export default usersAPI;