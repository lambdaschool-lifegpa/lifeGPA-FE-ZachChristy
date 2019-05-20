import {
  DELETE_HABIT_START,
  DELETE_HABIT_SUCCESS,
  DELETE_HABIT_FAILURE
} from '../actions';

const initialState = {
  deletingHabit:false,
  error: null
};

const deleteHabitReducer = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_HABIT_START:
      return {
        ...state,
        deletingHabit: true,
        error: ''
      }
    case DELETE_HABIT_SUCCESS:
      return {
        ...state,
        deletingHabit: false,
        error: ''
        }
    case DELETE_HABIT_FAILURE:
      return {
        ...state,
        deletingHabit: false,
        error: action.payload
        }
    default:
      return state
  }
}

export default deleteHabitReducer;
