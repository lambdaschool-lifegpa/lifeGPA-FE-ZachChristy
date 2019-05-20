import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions';

const initialState = {
  loggedInUser: {},
  loggedInMessage: null,
  loggingIn: false,
  isLoggedIn: false,
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: ''
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedInUser: action.payload.user,
        loggedInMessage: action.payload.message,
        loggingIn: false,
        isLoggedIn: true,
        error: ''
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default loginReducer;
