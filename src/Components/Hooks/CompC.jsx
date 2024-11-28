import React from 'react'
import { mycontext } from './ParentComp'
import { useContext } from 'react'

const CompC = () => {
    const data = useContext(mycontext)

  return (
    <div>
        <h2>CompC</h2>
        <p>{data.name}</p>
    </div>
  )
}

export default CompC