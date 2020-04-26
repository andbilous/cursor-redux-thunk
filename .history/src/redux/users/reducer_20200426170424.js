import types from './types';


const initialState = {
    posts:[
     
    ]
}

const usersReducer = (state = initialState, action) => {
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