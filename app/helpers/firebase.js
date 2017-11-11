import { db, storage } from 'config/firebase'
import { addExtendedDataToPlace, removeUpdateMetadata } from './format'

/**
 * Saves user into the firebase database
 * @param {Object} user - user data object
 * @returns {Promise.<TResult>}
 */
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

/**
 *
 * @param {string} uid - id of the user who wants to save the image
 * @param {string} placeId - id of the image attached place
 * @param {Object} image - metadata of the image
 * @returns {Promise}
 */
const saveImage = (uid, placeId, image) => {
  const storageRef = storage.ref('/places').child(`${uid}/${placeId}`)
  const upload = storageRef.child(image.name)
    .put(image, { contentType: image.type })

  upload.on('state_changed', (snapshot) => {
    console.log(`${(snapshot.bytesTransferred / snapshot.totalBytes) * 100} %`)
  })

  return upload
}

/**
 *
 * @param {string} uid - id of the user who wants to save the place
 * @param {Object} place - data of the place to be added
 * @returns {Promise.<TResult>}
 */
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

/**
 * Formats multiple objects coming from firebase
 * @param {Object} snapshot - object comming from a firebase fetch
 * @returns {{}}
 */
export const snapshotToObject = (snapshot) => {
  const returnObj = {}

  snapshot.forEach((doc) => {
    returnObj[doc.id] = doc.data()
  })

  return returnObj
}

/**
 * Fetch places data from firebase
 * returns {undefined} undefined
 */
export const getPlaces = () => db.collection('places')
  .get()
  .then(querySnapshot => snapshotToObject(querySnapshot))


/**
 * Get saved places for an specific user
 * @param {string} uid - id of the users who the places belongs
 * @returns {undefined} undefined
 */
export const getUserPlaces = uid => db.collection('userPlaces')
  .where('uid', '==', uid)
  .get()
  .then(querySnapshot => snapshotToObject(querySnapshot))


/**
 * Get specific user by user id
 * @param {string} uid - id of the user to be fetched
 * @returns {Object}
 */
export const getUser = uid => db.collection('users').doc(uid).get().then((doc) => {
  if (doc.exists) {
    return doc.data()
  }

  console.log('No such document')
  return {}
})

/**
 * Save a new place for an specific user
 * @param {Object} place - data of the place
 * @param {string} uid - id of the user who is saving the place
 * @returns {Promise.<TResult>}
 */
export const saveUserPlaceToVisit = (place, uid) => {
  const { imageURL } = place

  const placeWithoutMeta = removeUpdateMetadata(place)
  const placeExtended = addExtendedDataToPlace(placeWithoutMeta, { uid, imageURL })
  return db.collection('userPlaces').add(placeExtended).then(() => placeExtended)
}
