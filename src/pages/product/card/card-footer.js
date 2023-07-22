import React from 'react'
import styles from './card.module.css'
const CArdFooter = ({children}) => {
  return (
    <div className={styles['card-footer']}>{children}</div>
  )
}

export default CArdFooter