import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import noop from 'lodash/noop'

// TODO - Fix issue related to firebase modules not being found
// import Places from '../Places'
import PlacePreview from '../../PlacePreview/PlacePreview'

const places = {
  100: {
    name: 'nice place',
    description: 'nice description',
    photoURL: 'image',
  },
  200:{
    name: 'nice place 200',
    description: 'nice description 200',
    photoURL: 'image200',
  },
  300:{
    name: 'nice place 300',
    description: 'nice description 300',
    photoURL: 'image300',
  },
}

const minProps = {
  places,
  isUserPlaces: false,
  onSaveToUser: noop,
}

test.skip('Places should render correctly', () => {
  const wrapper = shallow(<Places {...minProps} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test.skip('Places should contain 3 PlacePreview components', () => {
  const wrapper = shallow(<Places {...minProps} />)
  expect(wrapper.find(PlacePreview)).toHaveLength(3)
})
