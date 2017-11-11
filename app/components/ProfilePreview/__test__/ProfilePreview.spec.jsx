import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ProfilePreview from '../ProfilePreview'

const minProps = {
  name: '',
  email: '',
  photoURL: '',
}

test('AddPlace render correctly', () => {
  const wrapper = shallow(<ProfilePreview {...minProps} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
