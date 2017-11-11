import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeContainer, LoginContainer, LogoutContainer, PlacesContainer, PrivateRouteContainer } from 'containers'
import { FourOhFour, Header } from 'components'
import { mainContainer, contentContainer, sidebarContainer } from './styles.css'

const Main = ({ isAuthed }) => (
  <div>
    <Header isAuthed={isAuthed} />
    <div className={contentContainer}>
      <aside className={sidebarContainer}>
        <h4>user info</h4>
        <p>Here we will display user info</p>
      </aside>
      <main className={mainContainer}>
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/login' component={LoginContainer} />
          <Route exact path='/logout' component={LogoutContainer} />
          <PrivateRouteContainer exact path='/places' component={PlacesContainer} />
          <Route component={FourOhFour} />
        </Switch>
      </main>
      <aside className={sidebarContainer}>
        <h4>Notifications</h4>
        <p>Here we will display a few info</p>
      </aside>
    </div>
  </div>
)

export default Main
