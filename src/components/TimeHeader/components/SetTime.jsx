import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../redux/actions'

function SetTime () {
  const dispatch = useDispatch()
  const isCountDown = useSelector(state => state.lottery.isCountDown)

  const timeRef = React.createRef()
  const handleSetTime = () => {
    const inputTime = parseInt(timeRef.current.value)
    if (inputTime >= 0) {
      dispatch(actions.app.showSnackbar('success', '設定成功！', dispatch))
      timeRef.current.value = ''
      return dispatch(actions.lottery.setTime(inputTime))
    }
    return dispatch(actions.app.showSnackbar('error', '請確認輸入正確！', dispatch))
  }
  return (
      <div className={'flex flex-col space-y-3'}>
        <h1 className={'text-center sm:text-left'}>設定倒數秒數</h1>
        <div>
          <input id={'setTime'} type="number" placeholder={'倒數幾秒鐘？'} ref={timeRef} className={'w-28 p-2.5 outline-none ring-2 ring-indigo-200 rounded rounded-r-none'}/>
          <button className={'rounded rounded-l-none bg-indigo-200 hover:bg-indigo-300 transition text-center p-3 disabled:bg-indigo-50 disabled:ring-2 disabled:ring-indigo-200 disabled:p-2.5'} disabled={isCountDown} onClick={handleSetTime}>設定！</button>
        </div>
      </div>
  )
}

export default SetTime
