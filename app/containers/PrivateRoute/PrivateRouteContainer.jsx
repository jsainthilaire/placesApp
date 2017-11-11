import React, { Component } from 'react'

import { connect } from 'react-redux'
import { PrivateRoute } from 'components'
import { isAuthenticated } from 'helpers/auth'

class PrivateRouteContainer extends Component {
  render() {
    const { status, uid } = this.props
    const isAuthed = isAuthenticated(status, uid)
    const isFetchingAuth = isAuthenticated(status, uid)

    return (
      <PrivateRoute isAuthed={isAuthed} isFetchingAuth={isFetchingAuth} {...this.props} />
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  status: auth.status,
  uid: auth.uid,
  isFetchingAuth: auth.isFetching,
})

export default connect(mapStateToProps)(PrivateRouteContainer)
