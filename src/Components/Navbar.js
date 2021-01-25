import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
        <p> *** navbar *** </p>

        <Link to='/register' className='nav-acc'> Register </Link>
        <Link to='/login' className='nav-acc'> Login </Link>
      </div>
  )
}

export default Navbar;
