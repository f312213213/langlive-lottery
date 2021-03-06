import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/actions'

function SnackbarBase () {
  const dispatch = useDispatch()
  const snackbarStatus = useSelector(state => state.app.snackbar)

  React.useEffect(() => {
    const autoHide = setTimeout(() => {
      dispatch(actions.app.closeSnackbar())
    }, 3000)
    return () => {
      clearTimeout(autoHide)
    }
  }, [snackbarStatus.compare])

  return (
      <>
        {snackbarStatus.message}
        <button onClick={() => {
          console.log('click')
          dispatch(actions.app.closeSnackbar())
        }}>
          <FaTimes />
        </button>
      </>
  )
}

export default SnackbarBase
