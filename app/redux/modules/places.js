import { getPlaces } from 'helpers/firebase'

const ADD_PLACE = 'ADD_PLACE'
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

const initialStatePlace = {
  name: '',
  description: '',
  photoURL: '',
  createdBy: '',
}

const initialState = {
  isFetching: false,
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
    default:
      return state
  }
}
