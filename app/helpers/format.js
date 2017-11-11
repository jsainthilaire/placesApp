import omit from 'lodash/omit'
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

export const addExtendedDataToPlace = (place, extendedData) => ({
  ...formatPlace(place),
  ...extendedData,
})

export const removeUpdateMetadata = data => omit(data, ['createAt', 'updatedAt'])
