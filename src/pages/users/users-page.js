import React, { Component } from 'react'
import { BasePage } from '../../components/base-page'

export default class UsersPage extends Component {
  constructor(){
    super()
    this.state = {
      userList: []
    }
  }


  render() {
    console.log(this.state.userList);
    return (
      <BasePage title={'Users'}>
        {this.state.userList.length > 0 ? 'users fetched' : <p>list is empty</p>}

      </BasePage>
    )
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(result => {
      this.setState({userList: result})
    })
  }
}
