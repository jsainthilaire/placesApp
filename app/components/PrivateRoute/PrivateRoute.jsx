import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LoginAwareContainer } from 'containers'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={props => (
      <LoginAwareContainer
        {...props}
        render={() => (<Component {...props} />)} />
    )}
  />
)

export default PrivateRoute
