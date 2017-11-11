import get from 'lodash/get'
import { getUserPlaces, saveUserPlaceToVisit } from 'helpers/firebase'

const FETCHING_USER_PLACES = 'FETCHING_USER_PLACES'
const FETCHING_USER_PLACES_ERROR = 'FETCHING_USER_PLACES_ERROR'
const FETCHING_USER_PLACES_SUCCESS = 'FETCHING_USER_PLACES_SUCCESS'
const REMOVE_USER_PLACES_FETCHING = 'REMOVE_USER_PLACES_FETCHING'
const SAVING_USER_PLACE = 'SAVING_USER_PLACE'
const SAVING_USER_PLACE_SUCCESS = 'FETCHING_USER_PLACES_SUCCESS'
const REMOVE_USER_PLACE_SAVING = 'REMOVE_USER_PLACE_SAVING'
const SAVING_USER_PLACE_ERROR = 'SAVING_USER_PLACE_ERROR'

const fetchingUserPlaces = (places) => ({
  type: FETCHING_USER_PLACES_SUCCESS,
  isFetching: true,
})

const removeFetchingUserPlaces = (places) => ({
  type: FETCHING_USER_PLACES_SUCCESS,
  isFetching: true,
})

const fetchingUserPlacesSuccess = (places) => ({
  type: FETCHING_USER_PLACES_SUCCESS,
  places,
})

const savingUserPlacesSuccess = (place) => ({
  type: SAVING_USER_PLACE_SUCCESS,
  place,
})

const savingUserPlacesError = (error) => ({
  type: SAVING_USER_PLACE_ERROR,
  error: error,
})

const fetchingUserPlacesError = (places) => ({
  type: FETCHING_USER_PLACES_ERROR,
  places,
})

export const fetchUserPlaces = () => {
  return (dispatch, getState) => {
    dispatch(fetchingUserPlaces())
    const { uid } = getState().auth
    getUserPlaces(uid)
      .then(places => dispatch(fetchingUserPlacesSuccess(places)))
      .catch(error => dispatch(fetchingUserPlacesError(error)))
  }
}

export const saveUserPlace = (placeId) => {
  return (dispatch, getState) => {
    const place = get(getState(), `places.${placeId}`)
    const uid = get(getState(), 'auth.uid')
    saveUserPlaceToVisit(place, uid)
      .then(place => {
        console.log(place)
        return dispatch(savingUserPlacesSuccess(place))
      })
      .catch(error => dispatch(savingUserPlacesError(error)))
  }
}

const initialState = {
  isFetching: false,
  error: '',
}

const placeInitialState = {
  name: '',
  description: '',
  imageURL: '',
}

export default function userPlaces(state = initialState, action) {
  switch (action.type) {
    case FETCHING_USER_PLACES:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USER_PLACES_SUCCESS:
      console.log(action)
      return {
        ...state,
        ...action.places,
        isFetching: false,
      }
    case SAVING_USER_PLACE_SUCCESS:
      return state
    case SAVING_USER_PLACE_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}
