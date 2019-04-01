import React, { Component } from 'react'
import Hours from './Hours'
import Minutes from './Minutes';
import Seconds from './Seconds'

export default class Clock extends Component {

  render() {
    return <div>
      <div id='digits'>
        <Hours /><h1>:</h1><Minutes /><h1>:</h1><Seconds />
      </div>
    </div>
  }
}