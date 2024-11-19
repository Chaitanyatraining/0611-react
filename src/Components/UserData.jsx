import React, { Component } from 'react'
import CounterComp from './CounterComp'

class UserData extends Component {
    // lifecycle methods
    //Mounting

    //constructor
    constructor(props){
        super()
        console.log('constructor executed')
    }

    state = {
        userData:[]
    }

    static getDerivedStateFromProps(){
        console.log(' static getDerivedStateFromProps')
        return null
    }    

    componentDidMount(){
        console.log('componentDidMount executed')
        this.getUserData()
    }

    getUserData = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
        this.setState({userData:data})
    }

  render() {
    console.log('render executed')
    return (
      <div className='text-center'>
        <h2>UserData</h2>
      </div>
    )
  }
}

export default UserData