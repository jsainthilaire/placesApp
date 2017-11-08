import React from 'react'
import { centeredContainer, title, description } from 'sharedStyles/styles.css'

const FourOhFour = () => (
  <section className={centeredContainer}>
    <h1 className={title}>Not Found</h1>
    <p className={description}>The page you are looking for does not exist</p>
  </section>
)

export default FourOhFour
