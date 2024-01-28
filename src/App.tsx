import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Indexpage from './components/Indexpage'
import Contest from './pages/Contest'
import Domains from './pages/Domains'
import Explore from './pages/Explore'
import Support from './pages/Support'
import Signup from './pages/Signup'
import Login from './pages/Login'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Indexpage />} />
          <Route path='/contest' element={<Contest />} />
          <Route path='/domains' element={<Domains />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/support' element={<Support />} />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App