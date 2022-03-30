import ActionTypes from './ActionTypes'

export const showSnackbar = (type, message) => {
  return {
    type: ActionTypes.SHOW_SNACKBAR,
    payload: {
      type: type,
      message: message
    }
  }
}

export const closeSnackbar = () => {
  return {
    type: ActionTypes.CLOSE_SNACKBAR
  }
}
