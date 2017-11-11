import React from 'react'
import { placeImage, container } from './stytles.css'

const PlacePreview = ({name, description, imageURL, saveToUser, isUserPlaces}) => {
  return (
    <article className={container}>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={imageURL} className={placeImage} />
      {!isUserPlaces && <button onClick={saveToUser}>Save</button>}
    </article>
  )
}

export default PlacePreview
