import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [bool, setBool] = useState(false)
    const [amount, setAmount] = useState(1000)

    const expensiveFunction = () => {
        const data = [];
        for(let i = 0; i<= amount; i++){
            if(i%2 === 0){
                console.log(i)
                data.push(i)
            }
        }
        return data
    }

    const calculationData = useMemo(()=>expensiveFunction(), [amount])

  return (
    <div>
        <h2>UseMemoHook</h2>
        <p>
            The UseMemoHook in react is used to optimise the performance
            of the component by memorizing the results of expensive 
            calculations.
        </p>
        <div>Current Value: {bool ? 'true' : 'false'}</div>
        <button 
        className='btn btn-primary'
        onClick={()=>{setBool(prevsstate =>!prevsstate)}}
        >Change Bool</button>
        
        <button 
        className='btn btn-info'
        onClick={()=> {setAmount(prevsstate => prevsstate + 100)}}>Add Data</button>
        {calculationData && calculationData.map((val)=>(
            <h4 key={val}>{val}</h4>
        ))}
    </div>
  )

}

export default UseMemoHook