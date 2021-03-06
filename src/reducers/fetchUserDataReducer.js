import {
  FETCH_USER_DATA_START,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE,
  LOGOUT_SUCCESS
} from '../actions';

const initialState = {
  userData: [],
  fetchingData: false,
  error: null
};

const fetchUserDataReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_DATA_START:
      return {
        ...state,
        fetchingData: true,
        error: ''
      }
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        fetchingData: false,
        error: ''
      }
    case FETCH_USER_DATA_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      }
    case LOGOUT_SUCCESS:
      return {
        fetchingData: false,
        userData: null
      }

    default:
      return state
  }
}

export default fetchUserDataReducer;
