import React, { createContext } from 'react'
import CompA from './CompA'

export const mycontext = createContext()

const ParentComp = () => {

    const user = { name: 'sachin' }

    return (
        <div>
            <h2>ParentComp</h2>
            <mycontext.Provider value={user}>
                <CompA />
            </mycontext.Provider>
        </div>
    )
}


export default ParentComp