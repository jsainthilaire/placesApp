import { auth, facebookAuthProvider, googleAuthProvider } from 'config/firebase'

export function authenticate(provider = 'google') {
  const providerInstance = provider !== 'google' ? facebookAuthProvider : googleAuthProvider

  return auth.signInWithPopup(providerInstance)
}
