import React from 'react'
import map from 'lodash/map'
import { AddPlaceContainer } from 'containers'
import { PlacePreview } from 'components'
import { container, placesList, division } from './styles.css'

const Places = ({ places, onSaveToUser, isUserPlaces }) => (
  <div className={container}>
    <h1>Places</h1>
    {!isUserPlaces && <AddPlaceContainer />}
    {!isUserPlaces && <hr className={division} />}
    <section className={placesList}>
      <h2>Places</h2>
      {map(places, ({ name, description, imageURL }, key) => (<PlacePreview
        key={key}
        name={name}
        description={description}
        imageURL={imageURL}
        saveToUser={onSaveToUser(key)}
        isUserPlaces={isUserPlaces}
      />))}
    </section>
  </div>
)

export default Places
