import React,{useState, useEffect} from 'react'

const CounterFunc = () => {
    const [count, setCount] = useState(0)

    // count [pages, setPages] = useState([])

    // Rules of Hooks
    // - Always declare at the top level
    // - Dont call hooks inside loops, conditions, functions

  return (
    <div className='text-center'>
        <h2>CounterFunc</h2>
        <h3>Count:  {count}</h3>
        <button className='btn btn-primary' 
        onClick={()=>{setCount(count + 1)}}
        >Increment</button>
        <button className='btn btn-danger ms-2' 
        onClick={()=>{setCount(count - 1)}}
        >Decrement</button>
        <button className='btn btn-warning ms-2'>Reset</button>
    </div>
  )
}

export default CounterFunc