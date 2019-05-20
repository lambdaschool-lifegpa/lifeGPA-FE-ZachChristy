import {
  CREATE_HABIT_START,
  CREATE_HABIT_SUCCESS,
  CREATE_HABIT_FAILURE
} from '../actions';

const initialState = {
  savingHabit: false,
  error: null
};

const createHabitReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_HABIT_START:
      return {
        ...state,
        savingHabit: true,
        error: ''
      }
    case CREATE_HABIT_SUCCESS:
      return {
        ...state,
        savingHabit: false,
        error: ''
        }
    case CREATE_HABIT_FAILURE:
      return {
        ...state,
        savingHabit: false,
        error: action.payload
        }
    default:
      return state
  }
}

export default createHabitReducer;
