import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import actions from '../../redux/actions'

function SetFakeUser () {
  const dispatch = useDispatch()
  const numRef = React.createRef()
  const isSettingUser = useSelector(state => state.lottery.isSettingUser)

  const handleGenerateFakeUser = () => {
    if (numRef.current.value > 0) return dispatch(actions.lottery.setFakeUser(numRef.current.value))
    return dispatch(actions.app.showSnackbar('error', '請確認輸入正確！'))
  }
  return (
      <>
        {
            isSettingUser &&
            <div className={'fixed w-full h-screen z-40 bg-gray-700 bg-opacity-80 flex justify-center items-center'}>
              <div className={'w-1/5 p-4 flex flex-col space-y-3 justify-center items-center bg-indigo-200 rounded-2xl'}>
                <h1>要設定幾個假用戶</h1>
                <input type="number" placeholder={'輸入用戶數量'} ref={numRef} className={'text-center p-2.5 outline-none ring-2 ring-indigo-200 rounded'}/>
                <button onClick={handleGenerateFakeUser} className={'rounded bg-white hover:bg-indigo-100 transition text-center p-3 '}>
                  確認
                </button>
              </div>
            </div>
        }

      </>

  )
}

export default SetFakeUser
