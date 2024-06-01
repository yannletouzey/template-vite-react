import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function Menu({ burgerActive, setBurgerActive, size }) {

  const menuRef = useRef(null)

  useEffect(() => {
    if (burgerActive) {
      menuRef.current.style.translate = `-${menuRef.current.clientWidth}px 0`
    } else {
      menuRef.current.style.translate = `0 0`
    }
  }, [burgerActive])

  const handleMenu = () => {
    if (size < 768) {
      setBurgerActive(!burgerActive)
    }
  }
  return (
    <nav id='menu' className="menu" ref={menuRef}>
      <ul className="menu-list">
        <li>
          <Link to='/' onClick={handleMenu}>Home</Link>
        </li>
        <li>
          <Link to='/about' onClick={handleMenu}>About</Link>
        </li>
        <li>
          <Link to='/contact' onClick={handleMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
