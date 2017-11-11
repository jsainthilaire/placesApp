import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header } from 'components'
import { isAuthenticated } from 'helpers/auth'

class HeaderContainer extends Component {
  render() {
    const { status, uid } = this.props
    const isAuthed = isAuthenticated(status, uid)

    return (
      <Header isAuthed={isAuthed} />
    )
  }
}

HeaderContainer.propTypes = {
  status: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
}

const mapStateToProps = ({ auth }) => ({
  status: auth.status,
  uid: auth.uid,
})

export default connect(mapStateToProps)(HeaderContainer)
