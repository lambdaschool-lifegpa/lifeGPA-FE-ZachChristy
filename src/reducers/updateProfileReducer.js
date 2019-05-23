import {
  UPDATE_PROFILE_START,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE
} from '../actions';

const initialState = {
  updatingProfile: false,
  error: null
};

const updateProfileReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_PROFILE_START:
      return {
        ...state,
        updatingProfile: true,
        error: ''
      }
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updatingProfile: false,
        error: ''
        }
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        updatingProfile: false,
        error: action.payload
        }
    default:
      return state
  }
}

export default updateProfileReducer;
