import ActionTypes from './ActionTypes'
import produce from 'immer'

export const defaultState = {
  snackbar: {
    show: false,
    type: '',
    message: '',
    compare: ''
  },
  backdrop: false
}

export default produce(
  (draft = defaultState, action) => {
    switch (action.type) {
      case ActionTypes.SHOW_BACKDROP: {
        draft.backdrop = true
        break
      }
      case ActionTypes.CLOSE_BACKDROP: {
        draft.backdrop = false
        break
      }
      case ActionTypes.SHOW_SNACKBAR: {
        draft.snackbar = {
          ...action.payload,
          show: true
        }
        break
      }
      case ActionTypes.CLOSE_SNACKBAR: {
        draft.snackbar = defaultState.snackbar
        break
      }
      default: {
        break
      }
    }
  },
  defaultState
)
