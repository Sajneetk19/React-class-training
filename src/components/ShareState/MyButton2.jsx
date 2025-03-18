import React, { useState } from 'react';

function MyButton2({count,onHandleCount}) {
const [role,setRole]= useState(0);

const handleRole=()=>{
    setRole(count+5)
}

  return (
    <div>
      <h1>{count}</h1>
      <h2>{role}</h2>
      <button onClick={handleRole}>click</button>
      
    </div>
  )
}

export default MyButton2
