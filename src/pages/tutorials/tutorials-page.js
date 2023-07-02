import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import styles from './tutorials-page.module.css'


const TutorialsPage = () => {
  return (

    <div className={styles['tutorials-page']}>
      <aside>
        <ul>
        {/* <li><NavLink to={'/tutorials/react-components'}>React Component</NavLink></li> */}
        <li><NavLink to={'/tutorials'} end>Welcome</NavLink></li>
        <li><NavLink to={'react-components'}>React Component</NavLink></li>
        </ul>
      </aside>
      <div className={styles['content']}>
      <Outlet />
      </div>
    </div>


  )
}

export default TutorialsPage