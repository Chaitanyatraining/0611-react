import React, { useEffect, useRef } from 'react'

const UseRefHook = () => {
    const data = useRef()
    const timerRef = useRef(null)
    const intervalRef = useRef(null)

  const startTimer = () => {
    let seconds = 0;

    intervalRef.current = setInterval(() => {
      seconds++;
      timerRef.current.textContent = `Timer: ${seconds} seconds`
    }, 1000)

  }

  const stopTimer = () => {
    clearInterval(intervalRef.current)
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //       console.log(data.current.value)
  // }

  // useEffect(()=>{
  //   data.current.focus()
  // }, [])

  return (
    // useState will rerender when the content change and update the UI

    // useRef doesn't notify you when its content changes. Mutating the 
    // (.current) property doesn't cause a re-render.

    <div>
      <h2>UseRefHook</h2>
      <p ref={timerRef}>Timer : 0 seconds</p>
      <button className='btn btn-info me-3' onClick={startTimer}>Start Timer</button>
      <button className='btn btn-danger me-3'  onClick={stopTimer}>Stop Timer</button>

      {/* <form>
        <input type="text" ref={data} />
        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
      </form> */}
    </div>
  )
}

export default UseRefHook