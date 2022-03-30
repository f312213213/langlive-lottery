import React from 'react'
import { useSelector } from 'react-redux'

import BackdropBase from './BackdropBase'

function Backdrop () {
  const showBackdrop = useSelector(state => state.app.backdrop)

  return (
      <>
        {
            showBackdrop && <BackdropBase />
        }
      </>
  )
}

export default Backdrop
