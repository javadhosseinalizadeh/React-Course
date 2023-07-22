import React from 'react'
import styles from './home-page.module.css'
// import { Helmet } from 'react-helmet-async'
import {BasePage} from '../../components/base-page'

const HomePage = () => {
  return (
    <BasePage title={'Home'} >
    <div className={styles['main-layout']}>
    <h1>React case study</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, itaque. Consequatur deleniti harum ratione, non recusandae magnam aperiam natus repudiandae, unde similique iure! Voluptatum iusto, neque explicabo dolor corrupti quas?</p>
   <div style={{height:'350px', background:'url(/images/pic_trulli.jpg) no-repeat center'}}>
    
   </div>
   </div>
    </BasePage>
  )
}

export default HomePage