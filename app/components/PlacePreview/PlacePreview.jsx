import React from 'react'
import PropTypes from 'prop-types'
import { placeImage, container } from './stytles.css'

const PlacePreview = ({
  name,
  description,
  imageURL,
  saveToUser,
  isUserPlaces,
}) => (
  <article className={container}>
    <h2>{name}</h2>
    <p>{description}</p>
    <img src={imageURL} className={placeImage} />
    {!isUserPlaces && <button onClick={saveToUser}>Save</button>}
  </article>
)

PlacePreview.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  saveToUser: PropTypes.func.isRequired,
  isUserPlaces: PropTypes.bool.isRequired,
}

export default PlacePreview
