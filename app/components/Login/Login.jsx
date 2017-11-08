import React from 'react'
import PropTypes from 'prop-types'
import { centeredContainer, title } from 'sharedStyles/styles.css'
import { LoginButton } from 'components'
import { buttonsContainer } from './styles.css'

const Login = ({ onAuth }) => (
  <section className={centeredContainer}>
    <h1 className={title}>Login</h1>
    <div className={buttonsContainer}>
      <LoginButton provider='google' onAuth={onAuth} />
      <LoginButton provider='facebook' onAuth={onAuth} />
    </div>
  </section>
)

Login.propTypes = {
  onAuth: PropTypes.func.isRequired,
}

export default Login
