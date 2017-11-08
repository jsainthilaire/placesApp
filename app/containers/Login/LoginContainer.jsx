import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Login } from 'components'
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

LoginContainer.propTypes = {
  authUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  authUser(provider) {
    dispatch(authUser(provider))
  },
})

export default connect(null, mapDispatchToProps)(LoginContainer)
