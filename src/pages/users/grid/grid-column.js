import React, { Component } from 'react'
import styles from './grid.module.css'
export default class GridColumn extends Component {
  render() {
    return (
      <div className={styles['grid-column']} style={{width: this.props.width}}>
        {this.props.label}
      </div>
    )
  }
}
