import { savePlace, getPlaces } from 'helpers/firebase'

const ADD_PLACE = 'ADD_PLACE'
const UPDATE_NEW_PLACE = 'UPDATE_NEW_PLACE'
const FETCHING_PLACES = 'FETCHING_PLACES'
const FETCHING_PLACES_ERROR = 'FETCHING_PLACES_ERROR'
const FETCHING_PLACES_SUCCESS = 'FETCHING_PLACES_SUCCESS'
const REMOVE_FETCHING = 'REMOVE_FETCHING'


const fetchingPlacesSuccess = places => ({
  type: FETCHING_PLACES_SUCCESS,
  places,
})

const fetchingPlacesError = error => ({
  type: FETCHING_PLACES_ERROR,
  error,
})

const fetchingPlaces = () => ({
  type: FETCHING_PLACES,
})

const removeFetching = () => ({
  type: REMOVE_FETCHING,
})

export const fetchPlaces = () => {
  return (dispatch) => {
    dispatch(fetchingPlaces())
    getPlaces()
      .then(places => dispatch(fetchingPlacesSuccess(places)))
      .catch(error => dispatch(fetchingPlacesError(error)))
  }
}

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
  isFetching: false,
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
    case FETCHING_PLACES:
      return {
        ...state,
        isFetching: true,
      }
    case REMOVE_FETCHING:
      return {
        ...state,
        isFetching: false,
      }
    case FETCHING_PLACES_SUCCESS:
      return {
        ...state,
        ...action.places,
        isFetching: false,
      }
    case FETCHING_PLACES_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
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
