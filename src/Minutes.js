import React, { Component } from 'react'

export default class Minutes extends Component{
  state = { minutes: null};

  fillZero(number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  }

  addSecond() {
    this.setState(() => {
      return {minutes: this.fillZero(new Date().getMinutes())}
    })
  }
 
  update() {
    this.interval = setInterval(() => this.addSecond(), 1000)
  }

  componentDidMount () {
    this.update();
  }

  render() {
    return <h1> {this.state.minutes} </h1>
  }
}