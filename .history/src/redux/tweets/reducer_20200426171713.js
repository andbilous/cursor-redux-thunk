import types from './types';


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
      case types.ADD_TWEET_START:
        return {
          ...state,
          isLoading: true
        };
        case types.ADD_TWEET_SUCCESS:
        return {
          ...state,
          isLoading: false,
          tweets: [...state.tweets,action.payload]
        };
        case types.ADD_TWEET_FAILURE:
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