import { combineReducers } from 'redux'

import createHabitReducer from './createHabitReducer'
import deleteHabitReducer from './deleteHabitReducer'
import fetchUserDataReducer from './fetchUserDataReducer'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import updateHabitReducer from './updateHabitReducer'
import fetchCategoryListReducer from './fetchCategoryListReducer'
import fetchHabitReducer from './fetchHabitReducer'
import createCategoryReducer from './createCategoryReducer'
import updateProfileReducer from './updateProfileReducer'
import deleteProfileReducer from './deleteProfileReducer'

export default combineReducers({
  createHabitReducer,
  deleteHabitReducer,
  fetchUserDataReducer,
  fetchHabitReducer,
  loginReducer,
  registerReducer,
  updateHabitReducer,
  fetchCategoryListReducer,
  createCategoryReducer,
  deleteProfileReducer,
  updateProfileReducer
})
