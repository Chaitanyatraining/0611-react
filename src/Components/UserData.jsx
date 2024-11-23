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
        userData:[],
        searchTerm:''
    }

    static getDerivedStateFromProps(){
        console.log(' static getDerivedStateFromProps')
        return null
    }    

    componentDidMount(){
        console.log('componentDidMount executed')
        this.getUserData()
    }

    getUserData = async (searchTerm='')=>{
      const API_URL = `https://jsonplaceholder.typicode.com/users${this.state.searchTerm ? `?q=${this.state.searchTerm}` : ''}`
    
      const response = await fetch(API_URL)
      const data = await response.json()
      this.setState({userData:data})
    }

    handleChange = (e) => {
      this.setState({searchTerm:e.target.value})
    }

    componentDidUpdate(prevsProps, prevsState){
      if(prevsState.searchTerm !== this.state.searchTerm){
        this.getUserData(this.state.searchTerm)
      }
    }

    componentWillUnmount(){
      
    }

  render() {
    console.log('render executed')
    return (
      <div className='text-center'>
        <h2>UserData</h2>
        <input type="text" placeholder='Enter text' onChange={this.handleChange} />
        <ul>
          {this.state.userData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default UserData