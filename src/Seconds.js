import React, { Component } from 'react'

export default class Seconds extends Component{
  seconds = new Date().getSeconds();

  render(){
    return <h1> {this.seconds} </h1>
  }
}