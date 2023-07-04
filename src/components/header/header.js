import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'


const Header = () => {
  return (
    <header id={styles.header} >
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/tutorials'>Tutorials</NavLink></li>
          <li><NavLink to='/users'>Users</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header