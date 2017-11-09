import { db } from 'config/firebase'

export const saveUser = (user) => {
  const {
    uid, displayName, photoURL, email,
  } = user

  return db.collection('users').doc(uid).set({
    name: displayName,
    email,
    photoURL,
    uid,
  })
    .then(() => user)
}
