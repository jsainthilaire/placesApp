import { getUser } from 'helpers/firebase'

const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const FETCHING_USER_ERROR = 'FETCHING_USER_ERROR'
const REMOVE_FETCHING_USER = 'REMOVE_FETCHING_USER'

const fetchingUserError = (error) => {
  return {
    type: FETCHING_USER_ERROR,
    error,
  }
}

export const fetchingUserSuccess = (uid, user) => {
  return {
    type: FETCHING_USER_SUCCESS,
    uid,
    user,
  }
}

const fetchingUser = () => {
  return {
    type: FETCHING_USER,
  }
}

export const fetchUser = (uid) => {
  console.log(uid)
  return function (dispatch) {
    dispatch(fetchingUser())
    return getUser(uid)
      .then(user => dispatch(fetchingUserSuccess(uid, user)))
      .catch(error => dispatch(fetchingUserError(error)))
  }
}

const initialUserState = {
  info: {
    name: '',
    email: '',
    photoURL: '',
  },
}

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        info: action.user,
      }
    default:
      return state
  }
}

const initialState = {
  isFetching: true,
  error: '',
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        [action.uid]: user(state[action.uid], action),
      }
    case FETCHING_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case REMOVE_FETCHING_USER:
      return {
        ...state,
        isFetching: false,
      }
    default :
      return state
  }
}
