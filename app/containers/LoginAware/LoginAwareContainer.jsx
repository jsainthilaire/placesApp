import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoadingSpinner } from 'components'
import { isAuthenticated } from 'helpers/auth'

class LoginAwareContainer extends Component {
  render() {
    const {
      status, uid, isFetchingAuth, location,
    } = this.props
    const isAuthed = isAuthenticated(status, uid)

    if (isFetchingAuth) {
      return <LoadingSpinner />
    }

    return isAuthed
      ? this.props.render(isAuthed)
      : <Redirect to={{ pathname: '/login', state: { from: location } }} />
  }
}

LoginAwareContainer.propTypes = {
  status: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  isFetchingAuth: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
}

const mapStateToProps = ({ auth }) => ({
  status: auth.status,
  uid: auth.uid,
  isFetchingAuth: auth.isFetching,
})

export default connect(mapStateToProps)(LoginAwareContainer)
