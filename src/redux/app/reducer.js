import ActionTypes from './ActionTypes'

const defaultState = {
  snackbar: {
    show: false,
    type: '',
    message: ''
  },
  backdrop: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_BACKDROP: {
      return {
        ...state,
        backdrop: true
      }
    }
    case ActionTypes.CLOSE_BACKDROP: {
      return {
        ...state,
        backdrop: false
      }
    }
    case ActionTypes.SHOW_SNACKBAR: {
      return {
        ...state,
        snackbar: {
          ...action.payload,
          show: true
        }
      }
    }
    case ActionTypes.CLOSE_SNACKBAR: {
      return {
        ...state,
        snackbar: defaultState.snackbar
      }
    }
    default: {
      return state
    }
  }
}
