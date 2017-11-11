import React from 'react'
import PropTypes from 'prop-types'
import { containerProfilePreview, profileImage, profileEmail } from './styles.css'

const ProfilePreview = ({ name, email, photoURL }) => (
  <div className={containerProfilePreview}>
    <h4>{name}</h4>
    <img src={photoURL} alt={name} className={profileImage} />
    <h5 className={profileEmail}>{email}</h5>
  </div>
)

ProfilePreview.defaultProps = {
  name: '',
  email: '',
  photoURL: '',
}

ProfilePreview.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  photoURL: PropTypes.string,
}

export default ProfilePreview
