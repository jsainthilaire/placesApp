import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Places } from 'components'
import { fetchPlaces } from 'redux/modules/places'

class PlacesContainer extends Component {
  componentDidMount() {
    this.props.fetchPlaces()
  }

  render() {
    return (
      <Places />
    )
  }
}

const mapDispatchToProp = dispatch => ({
  fetchPlaces() {
    dispatch(fetchPlaces())
  },
})

export default connect(null, mapDispatchToProp)(PlacesContainer)
