import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/'} >T <span>.</span> Notas</NavLink>
        </li>
        <li>
          <NavLink to={'/'} >Inicio</NavLink>
        </li>
        <li>
          <NavLink to={'/info'} >¿Como funciona?</NavLink>
        </li>
        <li className='login-padre'>
          <NavLink className='login' to={'/login'}>Iniciar sesión</NavLink>
        </li>
      </ul>
    </nav>
  )
}
