import React, { Component } from 'react'
import Grid from './grid/grid'
import GridHeader from './grid/grid-header'
import GridBody from './grid/grid-body'

export default class UsersGridView extends Component {
    gridColumns = [
        {dataValue:'name' , label: 'Name', width: '30%'},
        {dataValue:'username' , label: 'User Name', width: '25%'},
        {dataValue:'email' , label: 'E-Mail', width: '25%'},
        {dataValue:'phone' , label: 'Phone', width: '20%'},
    ]
  render() {
    return (
      <Grid >
        <GridHeader columns={this.gridColumns}/>
        <GridBody dataList = {this.props.users} columns={this.gridColumns}/>
      </Grid>
    )
  }
}
