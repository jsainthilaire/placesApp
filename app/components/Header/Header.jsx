import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from 'assets/images/logo.png'
import { container, menuItems, btn, headerLogo, link } from './styles.css'

const AuthMenuItem = ({ isAuthed }) => {
  if (isAuthed) {
    return <li className={btn}><Link className={link} to='/'>Logout</Link></li>
  }

  return <li className={btn}><Link className={link} to='/'>Login</Link></li>
}

AuthMenuItem.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

const Header = ({ isAuthed }) => (
  <header className={container}>
    <Link className={headerLogo} to='/'><img alt='logo' src={logo} /></Link>
    <nav>
      <ul className={menuItems}>
        <AuthMenuItem isAuthed={isAuthed} />
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

export default Header
