import React from 'react'
import Logout from './Logout'
import { Link } from 'react-router-dom'

const NavbarHome = () => {
  return (
    <>
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <nav className="flex space-x-8">
        <Link to="/home" className="text-white text-lg">Home</Link>
        <Link to="/new-booking" className="text-white text-lg">New Booking</Link>
       
        
      </nav>
     
        <Logout/> 
      {/* </form> */}
    </header>
    
    
    </>
  
  )
}

export default NavbarHome
