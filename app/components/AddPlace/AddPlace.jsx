import React from 'react'
import PropTypes from 'prop-types'
import { addPlace, saveButton, descriptionBox, nameBox, label, title, imageContainer, imageBox } from './styles.css'

const AddPlace = ({
  updateName,
  updateDescription,
  submitPlace,
  onImageChange,
  description,
  name,
  imagePreviewURL,
}) => (
  <div className={addPlace}>
    <h2 className={title}>Save new Place</h2>
    <label className={label}>
      Name
      <input
        value={name}
        onChange={updateName}
        type='text'
        className={nameBox}
      />
    </label>
    <label className={label}>
      Description
      <textarea
        value={description}
        onChange={updateDescription}
        rows='4'
        cols='50'
        className={descriptionBox}
      />
    </label>
    <div className={imageContainer}>
      <input
        type='file'
        onChange={onImageChange}
      />
      <img className={imageBox} alt={name} src={imagePreviewURL} />
    </div>
    <button className={saveButton} onClick={submitPlace}>Save Place</button>
  </div>
)

AddPlace.propTypes = {
  description: PropTypes.string.isRequired,
  imagePreviewURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
  updateDescription: PropTypes.func.isRequired,
  submitPlace: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
}

export default AddPlace
