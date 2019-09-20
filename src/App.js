import React, { Component } from 'react'
import Box from "./Components/Box"

export default class App extends Component {
  state = {
    text:"qwerty",
    wext:"jgyhkl"
  }

  num = 9876

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <p>{this.num}</p>

        <Box/>

        <button onClick={()=>{
          this.num = 901
          // this.setState({
          //   text:"hgjh"
          // })
        }}>change</button>
      </div>
    )
  }
}
