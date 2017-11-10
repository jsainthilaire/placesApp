import React from 'react'
import map from 'lodash/map'
import { AddPlaceContainer } from 'containers'
import { PlacePreview } from 'components'
import { container, placesList, division } from './styles.css'

const Places = ({ places }) => (
  <div className={container}>
    <h1>My Places</h1>
    <AddPlaceContainer />
    <hr className={division} />
    <section className={placesList}>
      <h2>Places</h2>
      {map(places, ({ name, description, imageURL }, key) => (<PlacePreview
        key={key}
        name={name}e
        description={description}
        imageURL={imageURL}
      />))}
    </section>
  </div>
)

export default Places
