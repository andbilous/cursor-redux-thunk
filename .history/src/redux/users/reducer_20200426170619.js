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
        isLoading: true
      };
      case types.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: true
      };
      case types.GET_USERS_F:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};

export default postsReducer;