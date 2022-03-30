import React from 'react'
import PeopleWindow from './PeopleWindow'
import LotteryButton from './LotteryButton'
import { useSelector } from 'react-redux'

function MiddlePart () {
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

export default MiddlePart
