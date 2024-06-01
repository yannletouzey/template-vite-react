import React from 'react'
import Title from './Title'
import Menu from './Menu'
import Burger from './Burger'
import './index.css'

export default function Header() {
  return (
    <header id='header' className="header">
      <Title />
      <Menu />
      <Burger />
    </header>
  )
}
