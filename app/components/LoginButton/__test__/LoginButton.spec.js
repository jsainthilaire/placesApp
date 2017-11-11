import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import noop from 'lodash/noop'
import LoginButton from '../LoginButton'

const minProps = {
  onAuth: noop,
}

test('LoginButton should render correctly', () => {
  const wrapper = shallow(<LoginButton {...minProps} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test('Login should call onAuth if the user clicks on it', () => {
  const onAuth = jest.fn()
  const wrapper = shallow(<LoginButton {...minProps} onAuth={onAuth} />)
  wrapper.find('button').simulate('click')
  expect(onAuth).toBeCalled()
  expect(toJson(wrapper)).toMatchSnapshot()
})
