import React from 'react'
import Home from './crud/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './crud/Users'
import Create from './crud/Create'
import Edit from './crud/Edit'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route element={<Create/>} path='/'/>
        <Route element={<Users/>} path='/Users'/>
        <Route element={<Edit/>} path='/edit-users'/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App