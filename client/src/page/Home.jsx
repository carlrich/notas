import React from 'react'
import Notas from '../components/Notas'

export default function Home() {
  return (
    <div className='inicio'>
      <div className="caja buttons">
        <button className='btn btn-primary active'>Nota de texto sin formato</button>
        <button className='btn btn-primary'>Nota de texto enriquecido</button>
        <button className='btn btn-primary'>Lista de tareas</button>
      </div>
      <div className="caja form">
        <form action="">
          <div className="title">
            <input required type="text" placeholder='Titulo de la nota' id='title' />
            <button className='btn btn-primary'><i className='fa-solid fa-plus'></i> Nueva nota</button>
            <button className='btn btn-primary'><i className='fa-solid fa-plus'></i> Guardar</button>
          </div>
          <textarea required name="" id="" rows={20}></textarea>
        </form>
      </div>
      <div className="caja search-list">
        <div className="search">
          <input type="search" id='buscar' placeholder='Buscar nota' />
          <label htmlFor="buscar"><i className='fa-solid fa-search'></i></label>
        </div>
        <div className="notas">
          <Notas />
          <Notas />
          <Notas />
          <Notas />
          <Notas />
          <Notas />
        </div>
      </div>
    </div>
  )
}
