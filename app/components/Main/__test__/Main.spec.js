import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

// Todo - Fix issue with firebase packages not being found
// import Main from '../Main'

test.skip('Main should render correctly', () => {
  const wrapper = shallow(<Main />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
