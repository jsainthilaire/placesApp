import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Login } from 'components'
import { authUser } from 'redux/modules/auth'
import { isAuthenticated } from 'helpers/auth'

class LoginContainer extends Component {
  handleAuth = provider => () => {
    this.props.authUser(provider)
  }

  render() {
    const { status, uid } = this.props
    const isAuthed = isAuthenticated(status, uid)

    return isAuthed
      ? <Redirect to='/places' />
      : <Login onAuth={this.handleAuth} />

  }
}

LoginContainer.propTypes = {
  authUser: PropTypes.func.isRequired,
}

const mapStateToProps = ({ auth }) => ({
  status: auth.status,
  uid: auth.uid,
})

const mapDispatchToProps = dispatch => ({
  authUser(provider) {
    dispatch(authUser(provider))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
