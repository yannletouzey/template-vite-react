import React, { useEffect, useRef } from 'react'
import './index.css'

export default function Burger({ burgerActive, setBurgerActive }) {

  const burgerRef = useRef(null)

  const toggleBurger = () => {
    setBurgerActive(!burgerActive)
  }
  
  useEffect(() => {
    if (burgerActive) {
      burgerRef.current.style.translate = '-18rem 0'
    } else {
      burgerRef.current.style.translate = '0 0'
    }
  }, [burgerActive])

  return (
    <div id="burger" className="burger" ref={burgerRef} onClick={toggleBurger}>
      
    </div>
  )
}
