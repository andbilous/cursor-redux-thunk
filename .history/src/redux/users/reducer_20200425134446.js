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
        image:'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale'
      },
      {
        name:'Anakin skywalker2',
        photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
        nickname: "@dart_vader2",
        content:"WTF? Who is Ray? Why she is Skywalker2? Luke...?",
        date:"13 февр.",
        image:'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale'
      },
      {
        name:'Anakin skywalker3',
        photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
        nickname: "@dart_vader3",
        content:"WTF? Who is Ray? Why she is Skywalker3? Luke...?",
        date:"26 февр.",
        image:'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale'
      },
    ]
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POST:
      return {
        ...state,
        posts: [...state.posts,action.payload]
      };
    default:
      return state;
  }
};

export default postsReducer;