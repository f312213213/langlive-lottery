import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { AiTwotoneMail } from 'react-icons/ai'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/actions'

function DialogBase () {
  const [isLoad, setIsLoad] = React.useState(false)
  const dispatch = useDispatch()
  const personDialogStatus = useSelector(state => state.app.personDialog)
  const closeDialog = () => {
    setIsLoad(false)
    dispatch(actions.app.closePersonDialog())
  }
  return (
      <div className={'fixed w-full h-screen z-40 bg-gray-700 bg-opacity-80 flex justify-center items-center z-40'} onClick={closeDialog}>
        <div className=" w-11/12 sm:max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4 relative z-50">
          {
            !isLoad &&
              <div className={'w-full h-56 animate-pulse bg-gray-200 object-cover object-center absolute z'}/>
          }

           <img className="w-full h-56 object-cover object-center"
                onLoad={() => {
                  setIsLoad(true)
                }
           }
                style ={isLoad ? {} : { display: 'hidden' }}
                src={personDialogStatus.photoURL}
                alt="avatar" />
          <FaTimes className={'absolute right-4 top-4 text-white text-2xl cursor-pointer'} onClick={closeDialog} />
          <div className="py-4 px-6">
            <h1 className="text-2xl font-bold text-gray-800">{personDialogStatus.name}</h1>
            <p className="py-2 text-lg text-gray-700">{personDialogStatus.introduction}</p>
            <div className="flex items-center mt-4 text-gray-700">
              <AiTwotoneMail />
              <h1 className="px-2 text-sm">{personDialogStatus.email}</h1>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DialogBase
