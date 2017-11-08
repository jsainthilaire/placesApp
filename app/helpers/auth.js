import { auth, facebookAuthProvider, googleAuthProvider } from 'config/firebase'
const signedInStatus = 'SIGNED_IN'


export const authenticate = (provider = 'google') => {
  const providerInstance = provider !== 'google' ? facebookAuthProvider : googleAuthProvider

  return auth.signInWithPopup(providerInstance)
}

export const isAuthed = (status = '') => {
  return status === signedInStatus
}

export const logout = () => {
  auth.signOut()
}
