import React from 'react'
import Home from '../../pages/Home'
import Contact from '../../pages/Contact'
import About from '../../pages/About'

import { Route, Routes } from 'react-router-dom'
import './index.css'

export default function Main() {
  return (
    <main id='main' className="main">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </main>
  )
}
