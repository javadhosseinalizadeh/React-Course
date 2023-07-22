import React from 'react'
import {Link} from 'react-router-dom'
import styles from './add-new-panel.module.css'
const AddNewPanel = () => {
  return (
    <div className={styles['add-new-panel']}>
        <Link to= {'new'}><span className='material-symbol-outlined'>add</span></Link>
    </div>
  )
}

export default AddNewPanel