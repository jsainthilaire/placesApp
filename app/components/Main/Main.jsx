import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeContainer, LoginContainer, LogoutContainer, PlacesContainer } from 'containers'
import { FourOhFour, Header } from 'components'
import { mainContainer } from './styles.css'

const Main = ({ isAuthed }) => (
  <div>
    <Header isAuthed={isAuthed} />
    <main className={mainContainer}>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/logout' component={LogoutContainer} />
        <Route exact path='/places' component={PlacesContainer} />
        <Route component={FourOhFour} />
      </Switch>
    </main>
  </div>
)

export default Main
