import types from './types';


const initialState = {
    users:[
     
    ],
    isLoading: false

}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_START:
      return {
        ...state,
        is
      };
    default:
      return state;
  }
};

export default postsReducer;