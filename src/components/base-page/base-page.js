import React from 'react'
import styles from './base-page.module.css'
import { Helmet } from 'react-helmet-async'
const BasePage = ({title,description='this is a case study for react', children}) => {
  return (
    <>
    <Helmet>
        <title>React case study - {title}</title>
        <meta description='description' content={description} />
    </Helmet>
        <h2 className={styles['title']}>
            <span>{title}</span>            
        </h2>
        {children}
    </>
  )
}

export default BasePage