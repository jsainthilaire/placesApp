import React, { Component } from 'react'
import { container } from './styles.css'

class BaseContainer extends Component {
  render() {
    return (
      <div className={container}>Base Container</div>
    )
  }
}

export default BaseContainer
