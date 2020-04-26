import axios from 'axios';

const usersAPI = {
  getAircrafts:  async () => {
      return  await axios.get('77.120.108.119:9999/users').then(resp => {

        console.log(resp.data);
    });
}
}

export default usersAPI;