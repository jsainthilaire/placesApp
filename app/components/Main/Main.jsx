import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeContainer, LoginContainer, LogoutContainer } from 'containers'
import { FourOhFour, Header } from 'components'

const Main = ({ isAuthed }) => (
  <div>
    <Header isAuthed={isAuthed} />
    <main>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/logout' component={LogoutContainer} />
        <Route component={FourOhFour} />
      </Switch>
    </main>
  </div>
)

export default Main
