const intialState = {
  user: "",
  token: null,
  loggedIn: false,
  error:null
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload.username,
        token:action.payload.token,
        loggedIn:action.payload.loggedIn
      };
    case "LOG_ERROR":
      return{
        ...state,
        error:action.payload.error
      }
    case "SET_USER" : return{
      ...state,
      username : action.payload.username,
      token:action.payload.token
    }
    case "LOAD_USER":
        return{
          ...state,
          user: action.payload.username,
          token: action.payload.token,
          loggedIn:action.payload.loggedIn
        };
    case 'REMOVE_USER' : return{
      user: action.payload.uername,
      token: action.payload.token,
      loggedIn:action.payload.loggedIn
    }
    default:
      return state;
  }
};

export default userReducer;
