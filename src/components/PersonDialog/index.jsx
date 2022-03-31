import React from 'react'
import { useSelector } from 'react-redux'

function PersonDialog () {
  const personDialogStatus = useSelector(state => state.app.personDialog)
  return (
      <>
        {
            personDialogStatus.show &&
            <div className={'fixed w-full h-screen z-40 bg-gray-700 bg-opacity-80 flex justify-center items-center'}>
              <img src={personDialogStatus.photoURL} alt=""/>
            </div>
        }
      </>
  )
}

export default PersonDialog
