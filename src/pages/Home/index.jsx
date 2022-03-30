import React from 'react'
import TimeHeader from '../../components/TimeHeader'
import MiddlePart from './components/MiddlePart'

function Home () {
  return (
      <div className={'w-full h-screen pt-16'}>
        <TimeHeader />
        <MiddlePart />
      </div>
  )
}

export default Home
