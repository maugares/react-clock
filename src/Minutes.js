import React, { Component } from 'react'

export default class Minutes extends Component{
  minutes = new Date().getMinutes();

  render(){
    return <h1> {this.minutes} </h1>
  }
}