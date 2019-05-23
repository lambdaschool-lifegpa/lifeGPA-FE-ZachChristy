import {
  DELETE_PROFILE_START,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_FAILURE
} from '../actions';

const initialState = {
  deletingProfile:false,
  error: null
};

const deleteProfileReducer = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_PROFILE_START:
      return {
        ...state,
        deletingProfile: true,
        error: ''
      }
    case DELETE_PROFILE_SUCCESS:
      return {
        ...state,
        deletingProfile: false,
        error: ''
        }
    case DELETE_PROFILE_FAILURE:
      return {
        ...state,
        deletingProfile: false,
        error: action.payload
        }
    default:
      return state
  }
}

export default deleteProfileReducer;
