import React, { Component } from 'react'
import { BasePage } from '../../components/base-page'
import UsersGridView from './users-grid-view';

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
        {this.state.userList.length > 0 ? <UsersGridView users = {this.state.userList}/> : <p>list is empty</p>}

      </BasePage>

    )
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(result => {
      this.setState({userList: result})
    })
    //this.getAllUsers()
  }

  async getAllUsers () {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let result = await response.json()
    console.log(result);
  }
}
