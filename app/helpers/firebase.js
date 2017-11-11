import { db, storage } from 'config/firebase'
import { addExtendedDataToPlace, removeUpdateMetadata } from './format'

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
  const { image } = place
  const placeRef = db.collection('places').doc()
  const placeId = placeRef.id
  const upload = saveImage(uid, placeId, image)

  return upload.then((snapshot) => {
    const extendedData = {
      imageURL: snapshot.downloadURL,
      createdBy: uid,
    }

    const extendedPlace = addExtendedDataToPlace(place, extendedData)

    return db.collection('places').add(extendedPlace)
  })
}

export const snapshotToObject = (snapshot) => {
  const returnObj = {}

  snapshot.forEach((doc) => {
    returnObj[doc.id] = doc.data()
  })

  return returnObj
}

export const getPlaces = () => db.collection('places')
  .get()
  .then(querySnapshot => snapshotToObject(querySnapshot))


export const getUserPlaces = uid => db.collection('userPlaces')
  .where('uid', '==', uid)
  .get()
  .then(querySnapshot => snapshotToObject(querySnapshot))


export const getUser = uid => db.collection('users').doc(uid).get().then((doc) => {
  if (doc.exists) {
    return doc.data()
  }

  console.log('No such document')
  return {}
})


export const saveUserPlaceToVisit = (place, uid) => {
  const { imageURL } = place

  const placeWithoutMeta = removeUpdateMetadata(place)
  const placeExtended = addExtendedDataToPlace(placeWithoutMeta, { uid, imageURL })
  return db.collection('userPlaces').add(placeExtended).then(() => placeExtended)
}
