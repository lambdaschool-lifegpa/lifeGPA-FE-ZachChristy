import {
  UPDATE_HABIT_START,
  UPDATE_HABIT_SUCCESS,
  UPDATE_HABIT_FAILURE
} from '../actions';

const initialState = {
  updatingHabit: false,
  error: null
};

const updateHabitReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_HABIT_START:
      return {
        ...state,
        updatingHabit: true,
        error: ''
      }
    case UPDATE_HABIT_SUCCESS:
      return {
        ...state,
        updatingHabit: false,
        error: ''
        }
    case UPDATE_HABIT_FAILURE:
      return {
        ...state,
        updatingHabit: false,
        error: action.payload
        }
    default:
      return state
  }
}

export default updateHabitReducer;
