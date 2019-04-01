import React, { Component } from 'react'

export default class Seconds extends Component {
  state = { seconds: null};

  fillZero(number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  }

  addSecond() {
    this.setState(() => {
      return {seconds: this.fillZero(new Date().getSeconds())}
    })
  }
 
  update() {
    this.interval = setInterval(() => this.addSecond(), 1000)
  }

  componentDidMount () {
    this.update();
  }

  render() {
    return <h1> {this.state.seconds} </h1>
  }
}