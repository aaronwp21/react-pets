import React, { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0);

  const plusHandler = () => setCount(count + 1);
  const minusHandler = () => {
    if(count === 0){
      return;
    }
    setCount(count - 1);
  }

  return (
    <>
      <h2>How Many Pets Do You Have?</h2>
      <div className='counter-container'>
        <button onClick={() => minusHandler()}>-</button>
        <p>{count}</p>
        <button onClick={() => plusHandler()}>+</button>
      </div>
    </>
  )
}

export default Counter