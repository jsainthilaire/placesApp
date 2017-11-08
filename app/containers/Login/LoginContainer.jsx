import React, { Component } from 'react'
import { Login } from 'components'
import { authenticate } from 'helpers/auth'

class LoginContainer extends Component {
  handleAuth = provider => () => {
    authenticate(provider)
  }

  render() {
    return (
      <Login onAuth={this.handleAuth} />
    )
  }
}

export default LoginContainer
