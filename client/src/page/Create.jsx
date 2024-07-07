import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Create() {
  return (
    <div className='login-form'>
      <form action="">
        <div className="logo">
          <i className="fa-solid fa-feather"></i>
        </div>
        <h2>Crear una cuenta</h2>
        <div className="group-input">
          <input type="text" id='nombre' name='nombre' required autoComplete='off' />
          <label htmlFor="nombre">Nombre</label>
        </div>
        <div className="group-input">
          <input type="text" id='apellidos' name='apellidos' required />
          <label htmlFor="apellidos">Apellidos</label>
        </div>
        <div className="group-input">
          <input type="text" id='email' name='email' required />
          <label htmlFor="email">Correo</label>
        </div>
        <div className="group-input">
          <input type="password" id='password' name='password' required />
          <label htmlFor="password">Contraseña</label>
        </div>
        <button className='btn btn-primary' style={{width: '100%'}}>Crear cuenta</button>
        <p>¿Ya tienes una cuenta? <NavLink to={'/login'}>Iniciar sesión</NavLink></p>
      </form>
    </div>
  )
}
