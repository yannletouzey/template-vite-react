import React, { useEffect, useRef } from 'react'
import './index.css'

export default function Menu({ burgerActive }) {

  const menuRef = useRef(null)

  useEffect(() => {
    if (burgerActive) {
      // menuRef.current.style.transitionDuration = '0.5s'
      menuRef.current.style.translate = `-${menuRef.current.clientWidth}px 0`
    } else {
      menuRef.current.style.translate = `0 0`
    }
  }, [burgerActive])

  return (
    <nav id='menu' className="menu" ref={menuRef}>
      <ul className="menu-list">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
