import React, { Component } from 'react'
import styles from './grid.module.css'
export default class Grid extends Component {
  render() {
    return (
        <div className={styles['grid']}>
          {this.props.children}
        </div>
    )
  }
}
