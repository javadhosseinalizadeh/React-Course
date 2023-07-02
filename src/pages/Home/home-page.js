import React from 'react'
import styles from './home-page.module.css'
import { Helmet } from 'react-helmet-async'
import {BasePage} from '../../components/base-page'

const HomePage = () => {
  return (
    <BasePage title={'Home'} >
    <div className={styles['main-layout']}>

      
    </div>
    </BasePage>
  )
}

export default HomePage