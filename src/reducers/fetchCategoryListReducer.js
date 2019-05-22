import {
  FETCH_CATEGORY_LIST_START,
  FETCH_CATEGORY_LIST_SUCCESS,
  FETCH_CATEGORY_LIST_FAILURE,
} from '../actions';

const initialState = {
  categoryList: [],
  fetchingCategoryList: false,
  error: null
};

const fetchCategoryListReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CATEGORY_LIST_START:
      return {
        ...state,
        fetchingCategoryList: true,
        error: ''
      }
    case FETCH_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        categoryList: action.payload,
        fetchingCategoryList: false,
        error: ''
      }
    case FETCH_CATEGORY_LIST_FAILURE:
      return {
        ...state,
        fetchingCategoryList: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default fetchCategoryListReducer;
