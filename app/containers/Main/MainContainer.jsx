import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Main } from 'components'
import { signedIn, signOut, attemptingLogin, removeFetchingLogin } from 'redux/modules/auth'
import { fetchUser } from 'redux/modules/users'
import { auth as firebaseAuth } from 'config/firebase'

class MainContainer extends Component {
  componentDidMount() {
    this.props.attemptingLogin()
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.props.signedIn(user)
        this.props.fetchUser(user.uid)
        const { pathname } = this.props.location
        const { replace } = this.props.history

        if (pathname === '/login') {
          replace('/places')
        }
      } else {
        this.props.removeFetchingLogin()
        this.props.signOut()
      }
    })
  }

  render() {
    return (
      <Main />
    )
  }
}

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
  fetchUser(uid) {
    dispatch(fetchUser(uid))
  },
  removeFetchingLogin() {
    dispatch(removeFetchingLogin())
  },
})

MainContainer.propTypes = {
  signedIn: PropTypes.func.isRequired,
  attemptingLogin: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  removeFetchingLogin: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
}

export default connect(null, mapDispatchToProps)(MainContainer)
