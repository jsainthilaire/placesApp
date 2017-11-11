import { authenticate, logout } from 'helpers/auth'
import { saveUser } from 'helpers/firebase'

const SIGN_IN = 'SIGN_IN'
const SIGN_OUT = 'SIGN_OUT'
const SIGNING_ERROR = 'SIGNING_ERROR'
const ATTEMPTING_LOGIN = 'ATTEMPTING_LOGIN'
const REMOVE_FETCHING_LOGIN = 'REMOVE_FETCHING_LOGIN'

export const signedIn = (user) => {
  return {
    type: SIGN_IN,
    email: user.email,
    name: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid,
  }
}

const signingError = (error) => {
  return {
    type: SIGNING_ERROR,
    error,
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
}

export const removeFetchingLogin = () => {
  return {
    type: REMOVE_FETCHING_LOGIN,
  }
}

export const attemptingLogin = () => {
  return {
    type: ATTEMPTING_LOGIN,
  }
}

export const authUser = (provider) => {
  return (dispatch) => {
    dispatch(attemptingLogin())
    authenticate(provider)
      .then(({user}) => {
        const userData = { ...user.providerData[0], uid: user.uid }
        dispatch(signedIn(userData))
        return userData
      })
      .then((user) => saveUser(user))
      .catch(error => dispatch(signingError(error)))
  }
}

export const unauthUser = () => {
  return (dispatch) => {
    logout()
    dispatch(signOut())
  }
}

const initialState = {
  status: 'ANONYMOUS',
  email: null,
  displayName: null,
  photoURL: null,
  uid: null,
  error: '',
  isFetching: true,
}

export default function auth(state = initialState, action) {
  switch(action.type) {
    case ATTEMPTING_LOGIN:
      return {
        status: 'AWAITING_AUTH_RESPONSE',
        isFetching: true,
      };
    case SIGN_IN:
      return {
        status: 'SIGNED_IN',
        email: action.email,
        name: action.displayName,
        photoURL: action.photoURL,
        uid: action.uid,
        isFetching: false,
      }
    case SIGN_OUT:
      return {
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null,
      }
    case SIGNING_ERROR:
      return {
        status: 'ANONYMOUS',
        error: action.error,
        email: null,
        displayName: null,
        photoURL: null,
        uid: null,
        isFetching: false,
      }
    case REMOVE_FETCHING_LOGIN:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}
