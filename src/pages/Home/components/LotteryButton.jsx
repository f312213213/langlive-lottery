import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../redux/actions'

function LotteryButton () {
  const dispatch = useDispatch()
  const isCountDown = useSelector(state => state.lottery.isCountDown)

  const handleStart = () => {
    dispatch(actions.lottery.gameStart())
  }
  return (
      <button className={'bg-indigo-200 hidden sm:block hover:bg-indigo-300 transition p-4 rounded disabled:bg-indigo-50'} disabled={isCountDown} onClick={handleStart} >
        抽獎！
      </button>
  )
}

export default LotteryButton
