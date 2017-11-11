import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
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
  <button className={get(providers, `${provider}.className`)} onClick={onAuth(provider)}>
    {get(providers, `${provider}.text`)}
  </button>
)

LoginButton.defaulProps = {
  provider: providers.google,
}

LoginButton.propTypes = {
  provider: PropTypes.string,
  onAuth: PropTypes.func.isRequired,
}

export default LoginButton
