import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { unauthUser } from 'redux/modules/auth'

class LogoutContainer extends Component {
  componentDidMount() {
    this.props.unauthUser()
  }

  render() {
    return (
      <Redirect to='/login' />
    )
  }
}

LogoutContainer.propTypes = {
  unauthUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  unauthUser() {
    dispatch(unauthUser())
  },
})

export default connect(null, mapDispatchToProps)(LogoutContainer)
