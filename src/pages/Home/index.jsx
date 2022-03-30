import React from 'react'
import TimeHeader from '../../components/TimeHeader'
import LotteryMain from '../../components/LotteryMain'

function Home () {
  return (
      <div className={'w-full h-screen pt-16 px-12'}>
        <TimeHeader />
        <LotteryMain />
      </div>
  )
}

export default Home
