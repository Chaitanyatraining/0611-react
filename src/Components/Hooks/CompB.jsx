import React, { useContext } from 'react'
import CompC from './CompC'
import { mycontext } from './ParentComp'

const CompB = () => {
    const data = useContext(mycontext)
    console.log(data)

  return (
    <div>
        <h2>CompB</h2>
        <h4>Name: {data.name}</h4>
        <CompC />
    </div>
  )
}

export default CompB