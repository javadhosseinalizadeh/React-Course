import React from 'react'

import styles from './header.module.css'


const Header = () => {
  return (
    <header id={styles.header} >
      <nav>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Tutorials</a></li>
          {/* <li><a href=''/></li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header