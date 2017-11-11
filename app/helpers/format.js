import omit from 'lodash/omit'
import { serverTimestamp } from 'config/firebase'

/**
 * Adds metadata to the places
 * @param {Object} place - data of the place
 * @returns {Object}
 */
export const formatPlace = (place) => {
  const { name, description } = place

  return {
    name,
    description,
    createAt: serverTimestamp(),
    updateAt: serverTimestamp(),
  }
}

/**
 * Adds data which extends the place objects
 * @param {Object} place - data of the place
 * @param {Object} extendedData - data to be added to places
 * @returns {Object}
 */
export const addExtendedDataToPlace = (place, extendedData) => ({
  ...formatPlace(place),
  ...extendedData,
})

/**
 * Removes metadata from firebase objects
 * @param {Object} data - object containing the data and metadata
 * @returns {Object}
 */
export const removeUpdateMetadata = data => omit(data, ['createAt', 'updatedAt'])
