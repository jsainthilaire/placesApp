import { savePlace } from 'helpers/firebase'

const ADD_PLACE = 'ADD_PLACE'
const UPDATE_NEW_PLACE = 'UPDATE_NEW_PLACE'

export const updateNewPlace = (fieldName = 'name', fieldValue) => {
  return {
    type: UPDATE_NEW_PLACE,
    newPlace: {
      [fieldName]: fieldValue,
    },
  }
}

export const saveNewPlace = (place) => {
  return (dispatch, getState) => {
    const { uid } = getState().auth
    savePlace(uid, place)
      .then((data) => console.log(data))
      .catch((err) => {
        console.warn('Error saveNewPlace', err)
      })
  }
}

const initialStatePlace = {
  name: '',
  description: '',
  photoURL: '',
}

const initialStateNewPlace = {
  name: '',
  description: '',
}

const initialState = {
  newPlace: initialStateNewPlace,
}

const newPlace = (state = initialStateNewPlace, action) => {
  switch (action.type) {
    case UPDATE_NEW_PLACE:
      return {
        ...state,
        ...action.newPlace,
      }
    default:
      return state
  }
}

const place = (state = initialStatePlace, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        name: action.name,
        imageURL: action.imageURL,
        description: action.description,
      }
    default:
      return state
  }
}

export default function places(state = initialState, action) {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        [action.placeId]: place(state[action.placeId], action),
      }
    case UPDATE_NEW_PLACE:
      return {
        ...state,
        newPlace: newPlace(state.newPlace, action),
      }
    default:
      return state
  }
}
