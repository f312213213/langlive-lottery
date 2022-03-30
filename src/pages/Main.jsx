import React from 'react'

import Home from './Home'
import Header from '../components/Header'
import Backdrop from '../components/Backdrop'
import Snackbar from '../components/Snackbar'

function Main () {
  return (
      <>
        <Snackbar />
        <Backdrop />
        <Header />
        <Home />
      </>
  )
}
// TODO
// 響應式、snackbar 重新計時
export default Main
