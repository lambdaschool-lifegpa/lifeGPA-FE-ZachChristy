import {
  CREATE_CATEGORY_START,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE
} from '../actions';

const initialState = {
  savingCategory: false,
  error: null
};

const createCategoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_CATEGORY_START:
      return {
        ...state,
        savingCategory: true,
        error: ''
      }
    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        savingCategory: false,
        error: ''
        }
    case CREATE_CATEGORY_FAILURE:
      return {
        ...state,
        savingHabit: false,
        error: action.payload
        }
    default:
      return state
  }
}

export default createCategoryReducer;
