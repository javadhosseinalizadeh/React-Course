import React, { Component } from 'react'
import styles from './grid.module.css'
import GridRow from './grid-row';
import GridColumn from './grid-column';

export default class GridBody extends Component {
  render() {
    console.log(this.props.dataList);
    return (
      <div className={styles['grid-body']}>
          {
            this.props.dataList.map((data)=>(
              <GridRow key={data.id}>
                {this.props.columns.map((column,idx) => (
                  <GridColumn key={idx} width = {column.width} label = {data[column.dataValue]} />
                ))}
                
              </GridRow>
            ))
          }
      </div>
    )
  }
}
