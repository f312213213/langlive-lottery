import React from 'react'
import { useSelector } from 'react-redux'
import SnackbarBase from './SnackbarBase'

const CLASS = 'fixed sm:w-80 w-11/12 p-4 left-0 bottom-0 m-4 rounded text-white flex justify-between items-center z-50 '
function SnackbarClass () {
  const snackbarStatus = useSelector(state => state.app.snackbar)

  switch (snackbarStatus.type) {
    case 'success': {
      return (
          <div className={`bg-green-500 ${CLASS}`}>
            <SnackbarBase />
          </div>
      )
    }
    case 'error': {
      return (
          <div className={`bg-red-500 ${CLASS}`}>
            <SnackbarBase />
          </div>
      )
    }
    default: {
      return null
    }
  }
}

export default SnackbarClass
