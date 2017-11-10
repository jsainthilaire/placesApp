import React from 'react'
import { placeImage, container } from './stytles.css'

const PlacePreview = ({name, description, imageURL}) => {
  return (
    <article className={container}>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={imageURL} className={placeImage} />
    </article>
  )
}

export default PlacePreview
