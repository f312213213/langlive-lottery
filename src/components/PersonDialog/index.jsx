import React from 'react'
import { useSelector } from 'react-redux'

import DialogBase from './DailogBase'

function PersonDialog () {
  const show = useSelector(state => state.app.personDialog.show)
  return (
      <>
        {
          show && <DialogBase />
        }
      </>
  )
}

export default PersonDialog
