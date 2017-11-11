import { combineReducers } from 'redux'
import auth from './auth'
import places from './places'
import newPlace from './newPlace'
import users from './users'
import userPlaces from './userPlaces'

const rootReducer = combineReducers({
  auth,
  places,
  newPlace,
  users,
  userPlaces,
})

export default rootReducer
