import React from 'react';
import { centeredContainer, title, description } from 'sharedStyles/styles.css'

const Home = () => (
  <section className={centeredContainer}>
    <h1 className={title}>Places</h1>
    <p className={description}>Save your places to visit and rock the world!</p>
  </section>
)

export default Home
