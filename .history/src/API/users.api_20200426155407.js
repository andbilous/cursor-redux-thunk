import axios from 'axios'.

const aircraftAPI = {
  getAircrafts:  async () => {
      return  await axios.get(`${BASE_URL}/aircraft`,
          {
              headers: {
                  "Authorization" : `Bearer ${token}`,
              } })
          .then(function (response) {
              return response.data;
          })
          .catch(function (error) {
              console.log(error);
          });
  },