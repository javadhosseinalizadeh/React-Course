/*

import React from 'react'
class MyComponent extends from React.component {
    ...
    render() {
        ...
    return jsx
    }
}

import React, { Component } from 'React'
class MyComponent extends from Component {
        ...
    render() {
        ...
    return jsx
    }
}
*/
import React, {Component} from 'react'

const styleForDiv = {
    backgroundColor: '#ccc',
    textAlign: 'center',
    padding: '32px',
    marginBottom: '20px',

}

 export class ClassComponent1 extends React.Component {
    render() {
        return (
            <div style={styleForDiv}>
            <h2>Hello from class component</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nemo fugit numquam maxime consectetur dolorem quisquam, vitae impedit sapiente velit eaque voluptatum qui tempore amet ratione soluta cumque. Earum, debitis?</p>
        </div>
        );
    }
 }
 export class ClassComponent2 extends Component {
    render() {
        return (
            <div style={styleForDiv}>
            <h2>{this.props.title}</h2>
            <p>{this.props.message}</p>
            {this.props.children}
        </div>
        );
    }
 }

