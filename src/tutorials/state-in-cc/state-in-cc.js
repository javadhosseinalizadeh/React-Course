import React, { Component } from 'react'
import Sample from './sample'

export default class StateInCc extends Component {

    constructor() {
        super()
        console.log(this);
        this.onClickHandlerNormal = this.onClickHandlerNormal.bind(this)

        this.state = {
            display: 'block',
            isVisible : false
        }
    }
    
    isVisible = true
    
    onClickHandlerNormal () {

        console.log('test');
        console.log(this.isVisible);
    }

    onClickHandlerArrow = () => {

        console.log(this);
        
    }
    
    onToggleShowHandler = () => {
        this.visible = !this.isVisible
        this.forceUpdate()
    }

    onToggleDisplayHandler = () => {
        const newState = {
            ...this.state
        }
        newState.display = this.state.display === 'block' ? 'none' : 'block'
        this.setState(newState)
    }

    onToggleVisibleHandler = () => {
        this.setState({isVisible: !this.state.isVisible})
    }
  render() {
    return (
      <div >
        <button onClick={this.onClickHandlerNormal}>Test event normal</button>
        <button onClick={this.onClickHandlerArrow}>Test event arrow</button>
        <hr />
        <button onClick={this.onToggleShowHandler}>Toggle show (forceUpdate) </button>
       
        <button onClick={this.onToggleDisplayHandler}>Toggle show (state display) </button>
        <button onClick={this.onToggleVisibleHandler}>Toggle show (state isVisible) </button>
        <div style={{display: !this.isVisible ? 'none' : null}}>
            <div style={{display: this.state.display}}>
            {this.state.isVisible ? <Sample /> : null}
            
            </div>
       </div> 
      </div>
    )
  }
}
