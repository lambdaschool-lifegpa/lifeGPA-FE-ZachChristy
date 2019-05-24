import {
  FETCH_HABIT_START,
  FETCH_HABIT_SUCCESS,
  FETCH_HABIT_FAILURE,
} from '../actions';

const initialState = {
  habit: {},
  fetchingHabit: false,
  error: null
};

const fetchUserDataReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_HABIT_START:
      return {
        ...state,
        fetchingHabit: true,
        error: ''
      }
    case FETCH_HABIT_SUCCESS:
      return {
        ...state,
        habit: action.payload,
        fetchingHabit: false,
        error: ''
      }
    case FETCH_HABIT_FAILURE:
      return {
        ...state,
        fetchingHabit: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default fetchUserDataReducer;
