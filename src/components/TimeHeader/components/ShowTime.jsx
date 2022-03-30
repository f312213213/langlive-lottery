import React from 'react'
import { useSelector } from 'react-redux'

const ShowTime = () => {
  const time = useSelector(state => state.lottery.time)
  const renderTime = () => {
    return new Date(time * 1000).toISOString().substr(11, 8)
  }

  return (
      <div className={'flex flex-col space-y-3'}>
        <h1 className={'text-right'}>剩餘時間</h1>
        <div className={'text-red-500 text-4xl'}>
          {renderTime()}
        </div>
      </div>
  )
}

export default ShowTime
