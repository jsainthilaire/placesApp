import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LoadingSpinner } from 'components'

const PrivateRoute = ({ component: Component, isAuthed: isAuthed, isFetchingAuth: isFetchingAuth, ...rest }) => (
  <Route {...rest}
         render={props => (
           isAuthed ? (
             <Component {...props} />
           ) : (
             isFetchingAuth ? <LoadingSpinner /> : <Redirect to={{
               pathname: '/login',
               state: {from: props.location}
             }}/>
           )
         )}/>
)


export default PrivateRoute
