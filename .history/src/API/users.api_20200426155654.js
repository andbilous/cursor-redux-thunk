import axios from 'axios';

const usersAPI = {
  getAircrafts:  async () => {
      return  await axios.get('http://webcode.me').then(resp => {

        console.log(resp.data);
    });
}}

export default usersAPI;