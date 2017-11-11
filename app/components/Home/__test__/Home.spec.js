import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from '../Home'

test('Home should render correctly', () => {
  const wrapper = shallow(<Home />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

