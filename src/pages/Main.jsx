import React from 'react'

import Home from './Home'
import Header from '../components/Header'
import Backdrop from '../components/Backdrop'
import Snackbar from '../components/Snackbar'
import SetFakeUser from '../components/SetFakeUser'

function Main () {
  return (
      <>
        <Snackbar />
        <Backdrop />
        <Header />
        <SetFakeUser />
        <Home />
      </>
  )
}
export default Main
