import React from 'react'
import Home from '../page/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../page/Login'
import Info from '../page/Info'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/info' element={<Info/>} />
      <Route path='/*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}
