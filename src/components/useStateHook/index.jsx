import React, { useState } from 'react';
import First from './First';
import Second from './Second';

function UseState() {
   const[state,setState]= useState('ram');
   const[count,setCount]=useState(0);

   const [role,setRole]=useState(true);
//    function handleChange(){
//     setState("hello")
//    }
//    function handleCount(){
//     setCount(count+1)
//    }

function handleChnageUi(){
setRole(!role);
console.log("role..",role)
}
  return (
    <div>
      {/* <button onClick={handleCount}>chnageCount</button>
      <h1>{count}</h1>
      <hr/>
      <button onClick={handleChange}>chnageName</button>
      <h1>{state}</h1> */}

    {/* <button onClick={handleChnageUi}>change state</button> */}
     {/* {role? <h1>hello React</h1> : <h1>hello java</h1>} */}
     {/* {role ? <First/> : <Second/>} */}
     {role && <First/>}
    
{/* //for bulb project */}
    {/* <div >

        <First/>
        <Second/>
    </div> */}
    </div>
  )
}

export default UseState;
