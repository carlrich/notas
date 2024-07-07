import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login-form'>
      <form action="">
        <div className="logo">
          <i className="fa-solid fa-feather"></i>
        </div>
        <h2>Iniciar sesión</h2>
        <div className="group-input">
          <input type="text" id='email' name='email' required autoComplete='off' />
          <label htmlFor="email">Correo</label>
        </div>
        <div className="group-input">
          <input type="password" id='password' name='password' required />
          <label htmlFor="password">Contrseña</label>
        </div>
        <button className='btn btn-primary' style={{width: '100%'}}>Ingresar</button>
        <p>¿No tienes una cuenta? <NavLink to={'/login/create'}>Crear uno</NavLink></p>
      </form>
    </div>
  )
}
