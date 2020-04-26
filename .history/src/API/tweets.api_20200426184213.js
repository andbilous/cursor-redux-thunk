import axios from 'axios';

const tweetsAPI = {
  getTweets:  async () => {
      return  await axios.get('http://77.120.108.119:9999/tweets')
      .then((response) => {
        return response
       }, (error) => {
         console.log(error);
       });
},
  addTweet: async (data) => {
   return await axios.post('http://77.120.108.119:9999/tweets', {
    userId: data.userId,
      content: data.content,
      image: data.image
    })
    .then((response) => {
     return response
    }, (error) => {
      console.log(error);
    });
  }
}

export default tweetsAPI;