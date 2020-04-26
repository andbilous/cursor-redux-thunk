import types from './types';


const initialState = {
    users:[],
    isLoading: false,
    error:''

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
        isLoading: false,
        users: action.payload
      };
      case types.GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.p
      };
    default:
      return state;
  }
};

export default postsReducer;