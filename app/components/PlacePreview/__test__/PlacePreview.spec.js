import React from 'react'
import { shallow } from 'enzyme'
import noop from 'lodash/noop'
import toJson from 'enzyme-to-json'
import PlacePreview from '../PlacePreview'

const minProps = {
  name: '',
  description: '',
  imageURL: '',
  saveToUser: noop,
  isUserPlaces: false,
}

test('PlacePreview should render correctly', () => {
  const wrapper = shallow(<PlacePreview {...minProps} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test('PlacePreview should not render save button when the page is my places', () => {
  const wrapper = shallow(<PlacePreview {...minProps} isUserPlaces />)
  expect(wrapper.find('button')).toHaveLength(0)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test('PlacePreview should render save button when the page is my places', () => {
  const wrapper = shallow(<PlacePreview {...minProps} isUserPlaces={false} />)
  expect(wrapper.find('button')).toHaveLength(1)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test('PlacePreview should call saveToUser when the button is clicked', () => {
  const saveToUser = jest.fn()
  const wrapper = shallow(<PlacePreview {...minProps} saveToUser={saveToUser} />)
  wrapper.find('button').simulate('click')
  expect(saveToUser).toBeCalled()
})
