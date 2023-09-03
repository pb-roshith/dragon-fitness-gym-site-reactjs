import React from 'react'
import NavUI from '../components/navui'
import { Outlet } from 'react-router'
import Footer from '../components/footer'

const Rootlayout = () => {
  return (
    <>
        <NavUI></NavUI>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Rootlayout