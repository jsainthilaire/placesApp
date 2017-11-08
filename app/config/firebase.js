import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDw6OHOK9vu9uiaQv6X_vkEItJZRSFKWn0',
  authDomain: 'placesapp-b9bd7.firebaseapp.com',
  databaseURL: 'https://placesapp-b9bd7.firebaseio.com',
  projectId: 'placesapp-b9bd7',
  storageBucket: 'placesapp-b9bd7.appspot.com',
  messagingSenderId: '323590886517',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
