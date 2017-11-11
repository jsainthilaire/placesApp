import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import noop from 'lodash'
import AddPlace from '../AddPlace'

const minProps = {
  updateName: noop,
  updateDescription: noop,
  submitPlace: noop,
  onImageChange: noop,
  description: '',
  name: '',
  imagePreviewURL: '',
}

test('AddPlace render correctly', () => {
  const wrapper = shallow(<AddPlace {...minProps} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test('AddPlace should call submitPlace after clicking on save button', () => {
  const submitPlace = jest.fn()
  const wrapper = shallow(<AddPlace {...minProps} submitPlace={submitPlace} />)
  wrapper.find('.saveButton').simulate('click')
  expect(submitPlace).toBeCalled()
})

it('AddPlace should call updateName after changing the name input', () => {
  const updateName = jest.fn()
  const wrapper = shallow(<AddPlace {...minProps} updateName={updateName} />)
  wrapper.find('.nameBox').simulate('change', { target: { value: 'name changed!' } })

  expect(updateName).toBeCalled()
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('AddPlace should call updateDescription after changing the description textarea', () => {
  const updateDescription = jest.fn()
  const wrapper = shallow(<AddPlace {...minProps} updateDescription={updateDescription} />)
  wrapper.find('.descriptionBox').simulate('change', { target: { value: 'description is here' } })

  expect(updateDescription).toBeCalled()
})
