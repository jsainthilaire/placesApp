import React from 'react'
import PropTypes from 'prop-types'
import { google, facebook } from './styles.css'


const providers = {
  google: {
    text: 'Login with Google',
    className: google,
  },
  facebook: {
    text: 'Login with Facebook',
    className: facebook,
  },
}

const LoginButton = ({ provider, onAuth }) => (
  <button className={providers[provider].className} onClick={onAuth(provider)}>
    {providers[provider].text}
  </button>
)

LoginButton.propTypes = {
  provider: PropTypes.string.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default LoginButton
