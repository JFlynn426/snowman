import React, { Component } from 'react'

class Letter extends Component {
  pickALetter = event => {
    this.props.pickALetter(this.props.value)
  }
  render() {
    return <li onClick={this.pickALetter}>{this.props.value}</li>
  }
}

export default Letter
