import ActionTypes from './ActionTypes'

export const showSnackbar = (type, message) => {
  return {
    type: ActionTypes.SHOW_SNACKBAR,
    payload: {
      type: type,
      message: message,
      compare: Math.random()
    }
  }
}

export const closeSnackbar = () => {
  return {
    type: ActionTypes.CLOSE_SNACKBAR
  }
}
