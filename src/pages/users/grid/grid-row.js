import React, { Component } from 'react'
import styles from './grid.module.css'
export default class GridRow extends Component {
  render() {
    return (
      <div className={`${styles['grid-row']} ${this.props.striped ? styles['grid-striped']: ''}  ${this.props.hover ? styles['grid-hover']: ''} }`}>{this.props.children}</div>

    )
  }
}
