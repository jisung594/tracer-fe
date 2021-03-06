import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling/Navbar.scss';
import logo from '../Assets/placeholder_logo.png';
import menu from '../Assets/menu-icon-3.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='grid-col-1'>
        <Link to='/'>
          <img id='logo' src={logo} alt='logo'/>
        </Link>
      </div>
      <div className='grid-col-2'>
        <Link to='/index' className='nav-option'> INDEX </Link>
        <Link to='/news' className='nav-option'> NEWS </Link>
        <Link to='/calendar' className='nav-option'> CALENDAR </Link>
      </div>
      <div className='grid-col-3'>
        <Link to='/login' className='acc-option login'> LOGIN </Link>
        <Link to='/register' className='acc-option register'> CREATE ACCOUNT </Link>

        <img id='menu-icon' src={menu} alt='menu icon'/>
      </div>
    </div>
  )
}

export default Navbar;
