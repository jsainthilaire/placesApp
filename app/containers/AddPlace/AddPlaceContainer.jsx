import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AddPlace } from 'components'
import { updateNewPlace, saveNewPlace } from 'redux/modules/newPlace'

class AddPlaceContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null,
      imagePreviewURL: '',
    }
  }

  /**
   *
   * @returns {undefined} undefined
   */
  submitPlace = () => {
    const {
      description,
      name,
    } = this.props

    const { image } = this.state

    this.props.saveNewPlace({ description, name, image })
  }

  /**
   * Handles the newPlace update based on the field changed
   * @param {string} fieldName - name of the field on newPlace reducer
   * @returns {Function} callback - handles submit on the field change
   */
  updateNewPlace = fieldName => (e) => {
    this.props.updateNewPlace(fieldName, e.target.value)
  }

  /**
   * Handles the event for the image change on the new place form
   * @param {SyntheticEvent} e - file event
   * @returns {undefined} undefined
   */
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

const mapStateToProps = ({ newPlace }) => ({
  description: newPlace.description,
  name: newPlace.name,
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
