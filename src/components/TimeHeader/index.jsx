import React from 'react'

import SetTime from './components/SetTime'
import ShowTime from './components/ShowTime'

function TimeHeader () {
  return (
      <div className={'w-full px-4 flex flex-col space-y-3 sm:space-y-0 sm:flex-row justify-between items-center my-10'}>
        <SetTime />
        <ShowTime />
      </div>
  )
}

export default TimeHeader
