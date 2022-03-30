import React from 'react'
import { useSelector } from 'react-redux'

import PeopleWindow from './PeopleWindow'
import LotteryButton from './LotteryButton'

function LotteryMain () {
  const candidate = useSelector(state => state.lottery.candidate)
  const result = useSelector(state => state.lottery.result)
  return (
      <div className={'flex justify-evenly items-center flex-col sm:flex-row space-y-3'}>
        <PeopleWindow people={candidate} type={'candidate'}/>
        <LotteryButton />
        <PeopleWindow people={result} type={'result'} />
      </div>
  )
}

export default LotteryMain
