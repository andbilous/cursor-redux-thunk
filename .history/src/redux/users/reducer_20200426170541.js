import types from './types';


const initialState = {
    users:[
     
    ]
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.:
      return {
        ...state,
        posts: [...state.posts,action.payload]
      };
    default:
      return state;
  }
};

export default postsReducer;