import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeContainer, LoginContainer } from 'containers'
import { FourOhFour } from 'components'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/login' component={LoginContainer} />
      <Route component={FourOhFour} />
    </Switch>
  </main>
)

export default Main
