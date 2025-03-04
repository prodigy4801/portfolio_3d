import React from 'react';
import { NavLink } from 'react-router';

function NavigationBar() {
  return (
    <header className='header'>
      <NavLink to={'/'} className='flex w-10 h-10 rounded-lg bg-white items-center justify-center font-bold shadow-md'>
        <p className='red-gradient_text'>SE</p>
      </NavLink>
      <nav className='flex text-base gap-7 font-medium'>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive ? 'text-red-500/80 hover:text-red-800' : 'text-gray-700 hover:text-gray-900'
          }
        >
          Home
        </NavLink>
        <NavLink
          to={'/about'}
          className={({ isActive }) =>
            isActive ? 'text-red-500/80 hover:text-red-800' : 'text-gray-700 hover:text-gray-900'
          }
        >
          About
        </NavLink>
        <NavLink
          to={'/projects'}
          className={({ isActive }) =>
            isActive ? 'text-red-500/80 hover:text-red-800' : 'text-gray-700 hover:text-gray-900'
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={'/contact'}
          className={({ isActive }) =>
            isActive ? 'text-red-500/80 hover:text-red-800' : 'text-gray-700 hover:text-gray-900'
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default NavigationBar;
