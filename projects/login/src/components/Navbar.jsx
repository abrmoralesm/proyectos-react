import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='bg-gray-800 py-4'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between'>
          <div className='flex'>
            <Link to='/' className='text-white text-xl font-bold mr-8'>
              Home
            </Link>
            <Link to='/obras' className='text-white text-xl font-bold mr-8'>
              Obras
            </Link>
            <Link to='/noticias' className='text-white text-xl font-bold'>
              Noticias
            </Link>
          </div>
          <div className='flex'>
            <Link to='/login' className='text-white mr-4'>
              Login
            </Link>
            <Link to='/register' className='text-white'>
              Registro
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
