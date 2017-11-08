import React from 'react'
import { centeredContainer, title } from 'sharedStyles/styles.css'
import { LoginButton } from 'components'
import { buttonsContainer } from './styles.css'

const Login = () => (
  <section className={centeredContainer}>
    <h1 className={title}>Login</h1>
    <div className={buttonsContainer}>
      <LoginButton provider='google' />
      <LoginButton provider='facebook' />
    </div>
  </section>
)

export default Login
