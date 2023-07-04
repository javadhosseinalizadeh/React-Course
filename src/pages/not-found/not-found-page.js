import React from 'react'

import NotFoundImage from '../../assets/images/404-page.png'
import { Link } from 'react-router-dom'
import styles from './not-found-page.module.css'
import {Helmet} from 'react-helmet-async'
const NotFoundPage = () => {
  return (
    <div className={styles['not-found']}>
        <Helmet>
            <title>React case study - not found</title>
            <meta name='description' content='this page is unavailable'/>
        </Helmet>
        <img src={NotFoundImage} alt='Not Found'/>
        <p>Your page is not available <Link to={'/'}>Home</Link> </p>
    </div>
  )
}

export default NotFoundPage