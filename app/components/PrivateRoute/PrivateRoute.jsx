import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { LoginAwareContainer } from 'containers'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <LoginAwareContainer
        {...props}
        render={() => (<Component {...props} />)}
      />
    )}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
}

export default PrivateRoute
