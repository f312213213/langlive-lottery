import ActionTypes from './ActionTypes'
import produce from 'immer'

export const defaultState = {
  snackbar: {
    show: false,
    type: '',
    message: '',
    compare: ''
  },
  backdrop: false,
  personDialog: {
    show: false,
    name: '',
    photoURL: '',
    email: ''
  }
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
      case ActionTypes.SHOW_PERSON_DIALOG: {
        const { data } = action.payload
        draft.personDialog = {
          show: true,
          ...data
        }
        break
      }
      case ActionTypes.CLOSE_PERSON_DIALOG: {
        draft.personDialog = defaultState.personDialog
        break
      }
      case ActionTypes.TOGGLE_BACKDROP: {
        draft.backdrop = !draft.backdrop
        break
      }
      default: {
        break
      }
    }
  },
  defaultState
)
