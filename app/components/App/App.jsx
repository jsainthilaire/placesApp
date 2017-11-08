import React from 'react'
import { Main, Header } from 'components'
import './styles.css'

const App = () => (
  <div>
    <Header isAuthed={false} />
    <Main />
  </div>
)

export default App
