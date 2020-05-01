import axios from 'axios';

const tweetsAPI = {
  getTweets:  async () => {
      return  await axios.get('https://tweets.globalofficiallottery.com/tweets')
      .then((response) => {
        return response
       }, (error) => {
         console.log(error);
       });
},
  addTweet: async (data) => {
   return await axios.post('https://tweets.globalofficiallottery.com/tweets', {
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