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
    tweets:[]
}

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TWEETS_START:
      return {
        ...state,
        isLoading: true
      };
      case types.GET_TWEETS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tweets: action.payload
      };
      case types.GET_TWEETS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
      case types.A:
        return {
          ...state,
          isLoading: true
        };
        case types.ADD_USER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          users: [...state.users,action.payload]
        };
        case types.ADD_USER_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
    default:
      return state;
  }
};

export default tweetsReducer;