import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProfilePreview } from 'components'

class ProfilePreviewContainer extends Component {
  render() {
    return (
      <ProfilePreview {...this.props} />
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  name: auth.displayName,
  email: auth.email,
  photoURL: auth.photoURL,
})

export default connect(mapStateToProps)(ProfilePreviewContainer)
