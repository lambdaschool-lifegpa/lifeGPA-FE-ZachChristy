import { combineReducers } from 'redux'

import createHabitReducer from './createHabitReducer'
import deleteHabitReducer from './deleteHabitReducer'
import fetchUserDataReducer from './fetchUserDataReducer'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import updateHabitReducer from './updateHabitReducer'

export default combineReducers({
  createHabitReducer,
  deleteHabitReducer,
  fetchUserDataReducer,
  loginReducer,
  registerReducer,
  updateHabitReducer
})
