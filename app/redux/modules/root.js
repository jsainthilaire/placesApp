import { combineReducers } from 'redux'
import auth from './auth'
import places from './places'
import users from './users'

const rootReducer = combineReducers({
  auth,
  places,
  users,
})

export default rootReducer
