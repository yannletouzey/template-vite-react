import React, { useEffect, useState } from 'react'
import './index.css'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

export default function App() {
  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Header size={size} />
      <Main />
      <Footer />
    </>
  )
}
