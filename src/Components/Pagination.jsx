import React, { Component } from 'react'

 class Pagination extends Component {
    componentDidMount(){
        this.getUserData()
    }

    getUserData = async () => {
        const response = await fetch('https://dummyapi.io/data/v1/user?page=5&limit=15', {
            headers:{
                "app-id":"633e33e98efd49504c9c7643"
            }
        })
        const {data} = await response.json()

        console.log(data)
    }

  render() {
    return (
      <div>Pagination</div>
    )
  }
}

export default Pagination