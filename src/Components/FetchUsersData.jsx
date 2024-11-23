import React, { useEffect, useState } from 'react'

const FetchUsersData = () => {
    const [userData, setUserData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=>{
        // lifecycle Methods
        // Mounting, Updating, Unmounting
        getUserData()

        // return(){
        //     // unmounting
        // }
    }, [searchTerm])

    const  getUserData = async ()=>{
        const API_URL = `https://jsonplaceholder.typicode.com/users${searchTerm ? `?q=${searchTerm}` : ''}`
      
        const response = await fetch(API_URL)
        const data = await response.json()
        setUserData(data)
    }

  return (
    <div className='text-center'>
        <h2>UserData</h2>
        <input type="text" placeholder='Enter text' 
        onChange={(e)=>{setSearchTerm(e.target.value)}}
         />
        <ul>
          {userData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
  )
}

export default FetchUsersData