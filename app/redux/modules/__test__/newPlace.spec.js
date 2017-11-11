import newPlace, { updateNewPlace, resetNewPlace, initialState } from '../newPlace'

jest.mock('helpers/auth', () => '')
jest.mock('helpers/firebase', () => '')

const newPlaceData = {
  name: 'Name of the restauran',
  description: '',
}

test('Should update the name', () => {
  const name = 'Name of the restaurant'
  const newData = updateNewPlace('name', name)
  const state = newPlace(newPlaceData, newData)
  const { description } = newPlaceData
  expect(state).toEqual({ name, description })
})

test('Should update the description', () => {
  const description = 'Description'
  const newData = updateNewPlace('description', description)
  const state = newPlace(newPlaceData, newData)
  const { name } = newPlaceData
  expect(state).toEqual({ name, description})
})

test('Should reset the description and name', () => {
  const newData = resetNewPlace()
  const state = newPlace(newPlaceData, newData)
  expect(state).toEqual(initialState)
})
