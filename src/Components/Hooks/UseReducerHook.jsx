import React, { useReducer } from 'react'

const UseReducerHook = () => {
    const reducer = (currentState, action) => {
        switch(action.type){
            case "INCREMENT":
                return currentState + action.payload
            case "DECREMENT":
                return currentState - action.payload
            default:
                return currentState;
        }
    }

    const [count, dispatch] = useReducer(reducer, 0)
     
   
  return (
    <div>
        <h2>UseReducerHook</h2>
        <h2>Count: {count}</h2>
        <button className='btn btn-primary' 
        onClick={()=>{dispatch({type:'INCREMENT', payload:5})}}
        >Increment</button>
        <button className='btn btn-warning' 
        onClick={()=>{dispatch({type:'DECREMENT', payload:5})}}
        >Decrement</button>
    </div>
  )
}

export default UseReducerHook