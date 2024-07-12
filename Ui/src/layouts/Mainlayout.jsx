import React from 'react'
import NavbarHome from '../components/NavbarHome'
import { Outlet } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Mainlayout = () => {
  return (
   <>
   <NavbarHome/>
   <Outlet/>
   <ToastContainer/>

   </>
  )
}

export default Mainlayout
