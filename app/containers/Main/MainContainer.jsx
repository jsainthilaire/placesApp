import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Main } from 'components'
import { signedIn, signOut, attemptingLogin } from 'redux/modules/auth'
import { auth as firebaseAuth } from 'config/firebase'
import { isAuthed } from 'helpers/auth'

class MainContainer extends Component {
  componentDidMount() {
    this.props.attemptingLogin()
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.props.signedIn(user)
      } else {
        this.props.signOut()
      }
    })
  }

  render() {
    return (
      <Main isAuthed={this.props.isAuthed} />
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  isAuthed: isAuthed(auth.status),
})

const mapDispatchToProps = dispatch => ({
  signedIn(user) {
    dispatch(signedIn(user))
  },
  attemptingLogin() {
    dispatch(attemptingLogin())
  },
  signOut() {
    dispatch(signOut())
  },
})

MainContainer.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  signedIn: PropTypes.func.isRequired,
  attemptingLogin: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
