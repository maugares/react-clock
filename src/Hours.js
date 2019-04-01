import React, { Component } from 'react'

export default class Hours extends Component{
  state = { hours: null};

  fillZero(number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  }

  addSecond() {
    this.setState(() => {
      return {hours: this.fillZero(new Date().getHours())}
    })
  }
 
  update() {
    this.interval = setInterval(() => this.addSecond(), 1000)
  }

  componentDidMount () {
    this.update();
  }

  render() {
    return <h1> {this.state.hours} </h1>
  }
}