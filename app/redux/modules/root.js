import { combineReducers } from 'redux'
import auth from './auth'
import places from './places'

const rootReducer = combineReducers({
  auth,
  places,
})

export default rootReducer
