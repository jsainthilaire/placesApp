import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './modules/root'

const enhancers = composeWithDevTools(
  applyMiddleware(thunk),
)

export default function configureStore() {
  return createStore(rootReducer, enhancers)
}
