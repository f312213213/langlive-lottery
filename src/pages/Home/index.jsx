import React from 'react'
import TimeHeader from '../../components/TimeHeader'
import LotteryMain from '../../components/LotteryMain'

function Home () {
  return (
      <div className={'w-full min-h-screen pt-16 px-6 sm:px-12 pb-12'}>
        <TimeHeader />
        <LotteryMain />
      </div>
  )
}

export default Home
