import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiTwotoneMail } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import actions from '../../redux/actions'
import DialogBase from './DailogBase'

function PersonDialog () {
  const [isLoad, setIsLoad] = React.useState(false)
  const dispatch = useDispatch()
  const personDialogStatus = useSelector(state => state.app.personDialog)
  const closeDialog = () => {
    dispatch(actions.app.closePersonDialog())
  }
  return (
      <>
        {
            personDialogStatus.show && <DialogBase />

        }
      </>
  )
}

export default PersonDialog
