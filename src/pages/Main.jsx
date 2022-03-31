import React from 'react'

import Home from './Home'
import Header from '../components/Header'
import Backdrop from '../components/Backdrop'
import Snackbar from '../components/Snackbar'
import SetFakeUser from '../components/SetFakeUser'
import PersonDialog from '../components/PersonDialog'

function Main () {
  return (
      <>
        <Snackbar />
        <Backdrop />
        <PersonDialog />
        <Header />
        <SetFakeUser />
        <Home />
      </>
  )
}
export default Main
