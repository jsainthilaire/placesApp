import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import { Places } from 'components'
import { fetchPlaces } from 'redux/modules/places'
import { fetchUserPlaces, saveUserPlace } from 'redux/modules/userPlaces'

class PlacesContainer extends Component {
  componentDidMount() {
    const { isUserPlaces } = this.props
    if (isUserPlaces) {
      this.props.fetchUserPlaces()
    } else {
      this.props.fetchPlaces()
    }
  }

  saveToUser = placeId => () => {
    this.props.saveUserPlace(placeId)
  }

  render() {
    const { isUserPlaces, places } = this.props
    return (
      <Places places={places} isUserPlaces={isUserPlaces} onSaveToUser={this.saveToUser} />
    )
  }
}

const mapStateToProps = ({ places, userPlaces }, { isUserPlaces }) => {
  const placesToRender = isUserPlaces ? userPlaces : places
  return {
    places: omit(placesToRender, ['isFetching']),
  }
}

const mapDispatchToProp = dispatch => ({
  fetchPlaces() {
    dispatch(fetchPlaces())
  },
  fetchUserPlaces() {
    dispatch(fetchUserPlaces())
  },
  saveUserPlace(placeId) {
    dispatch(saveUserPlace(placeId))
  },
})

PlacesContainer.propTypes = {
  isUserPlaces: PropTypes.bool.isRequired,
  fetchUserPlaces: PropTypes.func.isRequired,
  fetchPlaces: PropTypes.func.isRequired,
  saveUserPlace: PropTypes.func.isRequired,
  places: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
  }).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProp)(PlacesContainer)
