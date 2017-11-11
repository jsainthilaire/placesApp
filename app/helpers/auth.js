import { auth, facebookAuthProvider, googleAuthProvider } from 'config/firebase'

const signedInStatus = 'SIGNED_IN'

/**
 * Login the user with firebase
 * @param {string} provider - provider to login against
 * @returns {firebase.Promise.<firebase.auth.UserCredential>|Promise<any>}
 */
export const authenticate = (provider = 'google') => {
  const providerInstance = provider !== 'google' ? facebookAuthProvider : googleAuthProvider

  return auth.signInWithPopup(providerInstance)
}

/**
 * Checks if the user is logged in
 * @param {string} status - represents the current user status
 * @param {string} uid - id of the current user
 */
export const isAuthenticated = (status = '', uid) => status === signedInStatus && !!uid

/**
 * Log the user out of the platform
 */
export const logout = () => {
  auth.signOut()
}
