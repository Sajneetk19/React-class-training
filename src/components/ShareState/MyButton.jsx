import React from 'react'

function MyButton({count,onHandleCount}) {

  return (
    <div>
        <h1>{count}</h1>
      <button onClick={onHandleCount}>Click Me</button>
    </div>
  )
}

export default MyButton
