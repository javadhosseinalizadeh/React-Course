import React, { Component } from 'react'
import styles from './grid.module.css'
import GridRow from './grid-row'
import GridColumn from './grid-column'
export default class GridHeader extends Component {
    render() {
        return (
            <div className= {styles['grid-header']}>
                <GridRow>
                    {this.props.columns.map((columns, index) => (
                        <GridColumn key={index} width={columns.width} label={columns.label} />
                    ))}
                </GridRow>
            </div>
        )
    }
}
