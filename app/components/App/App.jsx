import React from 'react'
import { Main, Header } from 'components'
import './styles.css'

const App = ({isAuthed}) => (
  <div>
    <Header isAuthed={isAuthed} />
    <Main />
  </div>
)

export default App
