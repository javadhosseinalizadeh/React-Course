import React from 'react'
import styles from './card.module.css'
const CardText = ({children}) => {
  return (
    <div className={styles['card-text']}>{children}</div>
  )
}

export default CardText