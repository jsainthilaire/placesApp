import React, { Component } from 'react'
import { connect } from 'react-redux'
import omit from 'lodash/omit'
import { Places } from 'components'
import { fetchPlaces } from 'redux/modules/places'
import { fetchUserPlaces, saveUserPlace } from 'redux/modules/userPlaces'

class PlacesContainer extends Component {
  saveToUser = (placeId) => () => {
    this.props.saveUserPlace(placeId)
  }

  componentDidMount() {
    const { isUserPlaces } = this.props
    if (isUserPlaces) {
      this.props.fetchUserPlaces()
    } else {
      this.props.fetchPlaces()
    }
  }

  render() {
    const { isUserPlaces, places } = this.props
    return (
      <Places places={places} isUserPlaces={isUserPlaces} onSaveToUser={this.saveToUser} />
    )
  }
}

const mapStateToProps = ({ places, userPlaces }, {isUserPlaces}) => {
  const placesToRender = isUserPlaces ? userPlaces : places
  return {
    places: omit(placesToRender, ['isFetching']),
  }
}

const mapDispatchToProp = dispatch => {
  return {
    fetchPlaces() {
      dispatch(fetchPlaces())
    },
    fetchUserPlaces() {
      dispatch(fetchUserPlaces())
    },
    saveUserPlace(placeId) {
      dispatch(saveUserPlace(placeId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(PlacesContainer)
