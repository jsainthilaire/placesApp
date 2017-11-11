import { serverTimestamp } from 'config/firebase'

export const formatPlace = (place) => {
  const { name, description } = place

  return {
    name,
    description,
    createAt: serverTimestamp(),
    updateAt: serverTimestamp(),
  }
}

export const addExtendedDataToPlace = (place, exndedData) => ({
  ...formatPlace(place),
  ...exndedData,
})
