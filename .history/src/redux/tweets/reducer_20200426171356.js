import types from './types';

// <Post author={{
//   name: "Anakin skywalker",
//   photo: ANAKIN_IMAGE,
//   nickname: "@dart_vader"
// }}
// content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
// image={RAY_IMAGE}
// date={"26 февр."}

const initialState = {
    posts:[
      {
        name:'Anakin skywalker1',
        photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
        nickname: "@dart_vader1",
        content:"WTF? Who is Ray? Why she is Skywalker1? Luke...?",
        date:"22 февр.",
   
    ]
}

const tweetsReducer = (state = initialState, action) => {
  
};

export default tweetsReducer;