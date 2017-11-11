import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import noop from 'lodash'

// TODO - Fix issue related to firebase modules not being found
// import Login from '../Login'

const minProps = {
  onAuth: noop,
}

test.skip('Login should render correctly', () => {
  const wrapper = shallow(<Login {...minProps} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
