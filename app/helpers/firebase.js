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

const saveImage = (uid, placeId, image) => {
  const storageRef = storage.ref('/places').child(`${uid}/${placeId}`)
  const upload = storageRef.child(image.name)
    .put(image, { contentType: image.type })

  upload.on('state_changed', (snapshot) => {
    console.log(`${(snapshot.bytesTransferred / snapshot.totalBytes) * 100} %`)
  })

  return upload
}

export const savePlace = (uid, place) => {
  const { name, description, image } = place
  const placeRef = db.collection('places').doc()
  const placeId = placeRef.id
  const upload = saveImage(uid, placeId, image)

  return upload.then(snapshot => db.collection('places').add({
    name,
    description,
    imageURL: snapshot.downloadURL,
    createdBy: uid,
    createAt: serverTimestamp(),
    updateAt: serverTimestamp(),
  }))
}

export const snapshotToObject = (snapshot) => {
  const returnObj = {}

  snapshot.forEach((doc) => {
    returnObj[doc.id] = doc.data()
  })

  return returnObj
}

export const getPlaces = () => {
  return db.collection('places').get().then(querySnapshot => snapshotToObject(querySnapshot))
}

export const getUser = (uid) => {
  console.log(uid)
  return db.collection('users').doc(uid).get().then((doc) => {
    if (doc.exists) {
      return doc.data()
    } else {
      console.log("No such document!")
    }
  })
}
