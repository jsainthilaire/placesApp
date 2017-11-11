import { savePlace } from 'helpers/firebase'

const UPDATE_NEW_PLACE = 'UPDATE_NEW_PLACE'
const RESET_NEW_PLACE = 'RESET_NEW_PLACE'

export const updateNewPlace = (fieldName = 'name', fieldValue) => {
  return {
    type: UPDATE_NEW_PLACE,
    payload: {
      [fieldName]: fieldValue,
    },
  }
}

export const resetNewPlace = () => ({
  type: RESET_NEW_PLACE,
})

export const saveNewPlace = (place) => {
  return (dispatch, getState) => {
    const { uid } = getState().auth
    savePlace(uid, place)
      .then(() => dispatch(resetNewPlace()))
      .catch((err) => {
        console.warn('Error saveNewPlace', err)
      })
  }
}

export const initialState = {
  name: '',
  description: '',
}

export default function newPlace(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NEW_PLACE:
      return {
        ...state,
        ...action.payload,
      }
    case RESET_NEW_PLACE:
      return {
        ...initialState,
      }
    default:
      return state
  }
}