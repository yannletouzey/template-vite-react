import React, { useEffect, useRef, useState } from 'react'
import Title from './Title'
import Menu from './Menu'
import Burger from './Burger'
import './index.css'

export default function Header({ size }) {

  const [burgerActive, setBurgerActive] = useState(false)

  useEffect(() => {
    if (size < 768) {
      setBurgerActive(false)
    } else {
      setBurgerActive(true)
    }
  }, [size])

  return (
    <header id='header' className="header">
      <Title />
      <Menu burgerActive={burgerActive} />
      <Burger burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
    </header>
  )
}
