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

export const showPersonDialog = (data) => (dispatch, getState) => {
  return dispatch({
    type: ActionTypes.SHOW_PERSON_DIALOG,
    payload: { data }
  })
}

export const closePersonDialog = () => (dispatch, getState) => {
  return dispatch({
    type: ActionTypes.CLOSE_PERSON_DIALOG
  })
}
