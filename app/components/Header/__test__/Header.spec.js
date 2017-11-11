import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from '../Header'

test('Header render correctly', () => {
  const wrapper = shallow(<Header isAuthed={false} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
