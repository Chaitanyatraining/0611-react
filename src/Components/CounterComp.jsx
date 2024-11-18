import React, { Component } from 'react'

class CounterComp extends Component {
    // state 
    // - state is an object
    // - It is to manipulate the data within the component
    
    // - never update the state directly

    constructor(){
        super()
        // this.state = {
        //     count:0
        // }
    }

    state = {
        count:0
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement = () => {
      this.setState({
          count: this.state.count - 1
      })
  }

  render() {
    return (
      <div className='text-center'>
        <h2>CounterComp</h2>
        <h4>Count:{this.state.count}</h4>
        <button className='btn btn-primary' onClick={()=>{this.handleIncrement()}}>Increment</button>
        <button className='btn btn-danger ms-2' onClick={()=>{this.handleDecrement()}}>Decrement</button>
        <button className='btn btn-warning ms-2'>Reset</button>
      </div>
    )
  }
}

export default CounterComp