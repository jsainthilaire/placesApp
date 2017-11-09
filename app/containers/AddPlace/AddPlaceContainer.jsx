import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AddPlace } from 'components'
import { updateNewPlace, saveNewPlace } from 'redux/modules/places'

class AddPlaceContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null,
      imagePreviewURL: '',
    }
  }
  submitPlace = () => {
    const {
      description,
      name,
    } = this.props

    const { image } = this.state

    this.props.saveNewPlace({ description, name, image })
  }

  updateNewPlace = fieldName => (e) => {
    this.props.updateNewPlace(fieldName, e.target.value)
  }

  handleImageChange = (e) => {
    const image = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      this.setState({
        image,
        imagePreviewURL: reader.result,
      })
    }

    reader.readAsDataURL(image)
  }

  render() {
    return (
      <AddPlace
        updateName={this.updateNewPlace('name')}
        updateDescription={this.updateNewPlace('description')}
        onImageChange={this.handleImageChange}
        imagePreviewURL={this.state.imagePreviewURL}
        submitPlace={this.submitPlace}
        description={this.props.description}
        name={this.props.name}
      />
    )
  }
}

AddPlaceContainer.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateNewPlace: PropTypes.func.isRequired,
  saveNewPlace: PropTypes.func.isRequired,
}

const mapStateToProps = ({ places }) => ({
  description: places.newPlace.description,
  name: places.newPlace.name,
})

const mapDispatchToProps = dispatch => ({
  updateNewPlace(fieldName, fieldValue) {
    dispatch(updateNewPlace(fieldName, fieldValue))
  },
  saveNewPlace(place) {
    dispatch(saveNewPlace(place))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPlaceContainer)
