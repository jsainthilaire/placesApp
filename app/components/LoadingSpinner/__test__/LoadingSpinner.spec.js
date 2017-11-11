import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LoadingSpinner from '../LoadingSpinner'

test('LoadingSpinner should render correctly', () => {
  const wrapper = shallow(<LoadingSpinner />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
