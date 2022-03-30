import { combineReducers } from 'redux'

import app from './app/reducer'
import lottery from './lottery/reducer'

export default combineReducers({
  app,
  lottery
})
