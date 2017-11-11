import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import FourOhFour from '../FourOhFour'

test('FourOhFour should render correctly', () => {
  const wrapper = shallow(<FourOhFour />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
