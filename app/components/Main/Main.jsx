import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeContainer, LoginContainer, LogoutContainer, PlacesContainer, HeaderContainer, ProfilePreviewContainer } from 'containers'
import { FourOhFour, PrivateRoute } from 'components'
import { mainContainer, contentContainer, sidebarContainer } from './styles.css'

const Main = () => (
  <div>
    <HeaderContainer />
    <div className={contentContainer}>
      <aside className={sidebarContainer}>
        <ProfilePreviewContainer />
      </aside>
      <main className={mainContainer}>
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/login' component={LoginContainer} />
          <Route exact path='/logout' component={LogoutContainer} />
          <PrivateRoute exact path='/places' component={PlacesContainer} />
          <PrivateRoute exact path='/myplaces' component={props => <PlacesContainer {...props} isUserPlaces />} />
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
