import omit from 'lodash/omit'
import auth, { initialState, signedIn, ATTEMPTING_LOGIN, signOut } from '../auth'

jest.mock('helpers/auth', () => '');
jest.mock('helpers/firebase', () => '');

const attemptToLoginData = {
  status:'AWAITING_AUTH_RESPONSE',
  isFetching: true,
}

const signInData = {
  email: 'itt.jose.sainthilaire@gmail.com',
  displayName: 'Jose Saint Hilaire',
  photoURL: 'https://lh6.googleusercontent.com/-lgjm1qPRF4Y/AAAAAAAAAAI/AAAAAAAABjw/JMCGkILyjSk/photo.jpg',
  uid: 'CXzriRq1SqRofO6fyptx16fyu6I3',
}

test('Should attepm to login', () => {
  const state = auth({...initialState}, { type: ATTEMPTING_LOGIN });
  expect(state).toEqual(attemptToLoginData)
})

test('Should sign the user in', () => {
  const signedInResponse = signedIn(signInData)
  const state = auth(attemptToLoginData, signedIn(signInData))
  expect(state).toEqual({ ...omit(signedInResponse, ['type']), status: 'SIGNED_IN', isFetching: false })
})

test('Should sign the user out', () => {
  const loggedUserData = auth(attemptToLoginData, signedIn(signInData))
  const state = auth(loggedUserData, signOut())
  expect(state).toEqual({ ...initialState, isFetching: false })
})
