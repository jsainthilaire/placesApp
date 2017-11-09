import { db, storage, serverTimestamp } from 'config/firebase'

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

const saveImage = (uid, image) => {
  const storageRef = storage.ref('/places').child(uid)
  const upload = storageRef.child(image.name)
    .put(image, { contentType: image.type })

  upload.on('state_changed', (snapshot) => {
    console.log(`${(snapshot.bytesTransferred / snapshot.totalBytes) * 100} %`)
  })

  return upload
}

export const savePlace = (uid, place) => {
  const { name, description, image } = place
  const upload = saveImage(uid, image)

  return upload.then(snapshot => db.collection('places').add({
    name,
    description,
    imageURL: snapshot.downloadURL,
    createdBy: uid,
    createAt: serverTimestamp(),
    updateAt: serverTimestamp(),
  }))
}
