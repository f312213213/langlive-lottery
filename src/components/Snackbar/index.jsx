import React from 'react'
import { useSelector } from 'react-redux'

import SnackbarClass from './SnackbarClass'

function Snackbar () {
  const snackbarStatus = useSelector(state => state.app.snackbar)
  return (
      <>
        {
            snackbarStatus.show && <SnackbarClass />
        }
      </>
  )
}

export default Snackbar
