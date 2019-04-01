import React, { Component } from 'react'

export default class Hours extends Component{
  hours = new Date().getHours();

  render(){
    return <h1> {this.hours} </h1>
  }
}