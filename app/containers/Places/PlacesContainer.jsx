import React, { Component } from 'react'
import { connect } from 'react-redux'
import omit from 'lodash/omit'
import { Places } from 'components'
import { fetchPlaces } from 'redux/modules/places'

class PlacesContainer extends Component {
  componentDidMount() {
    this.props.fetchPlaces()
  }

  render() {
    return (
      <Places places={this.props.places} />
    )
  }
}

const mapStateToProps = ({ places }) => ({
  places: omit(places, ['isFetching', 'newPlace']),
})


const mapDispatchToProp = dispatch => ({
  fetchPlaces() {
    dispatch(fetchPlaces())
  },
})

export default connect(mapStateToProps, mapDispatchToProp)(PlacesContainer)
