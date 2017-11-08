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

const LoginButton = ({ provider }) => (
  <button className={providers[provider].className}>
    {providers[provider].text}
  </button>
)

LoginButton.propTypes = {
  provider: PropTypes.string.isRequired,
}

export default LoginButton
