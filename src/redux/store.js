import { createStore as _createStore, compose } from 'redux'

import rootReducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const createStore = () => _createStore(
  rootReducer,
  composeEnhancers()
)

const store = createStore()

export default store
