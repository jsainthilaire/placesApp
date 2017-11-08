import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Login } from 'components'
import { authenticate } from 'helpers/auth'
import { authUser } from 'redux/modules/auth'

class LoginContainer extends Component {
  handleAuth = provider => () => {
    this.props.authUser(provider)
  }

  render() {
    return (
      <Login onAuth={this.handleAuth} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  authUser(provider) {
    dispatch(authUser(provider))
  },
})

export default connect(null, mapDispatchToProps)(LoginContainer)
