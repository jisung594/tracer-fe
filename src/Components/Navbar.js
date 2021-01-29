import React from 'react';
import { Link } from 'react-router-dom'
import '../Styling/Navbar.scss'
import logo from '../Assets/placeholder_logo.png'
import menu from '../Assets/menu-icon-2.png'

const Navbar = () => {
  return (
      <div className='navbar'>
        <div className='grid-col-1'>
          <p> *** grid col 1 *** </p>
        </div>
        <div className='grid-col-2'>
          <img id='logo' src={logo} alt='logo'/>
        </div>
        <div className='grid-col-3'>
          <Link to='/register' className='nav-acc'> Register </Link>
          <Link to='/login' className='nav-acc'> Login </Link>

          <img id='menu-icon' src={menu} alt='menu icon'/>
        </div>
      </div>
  )
}

export default Navbar;
