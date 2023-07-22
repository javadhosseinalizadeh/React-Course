import React from 'react'
import styles from './card.module.css'
const CardTitle = ({children}) => {
  return (
    <h3 className={styles['card-title']}>{children}</h3>
  )
}

export default CardTitle