import { useEffect, useState } from 'react';

export default function workLife(){
    // const[data,setData]=useState(null);
    const[count,setCount]=useState(0);

    
    useEffect(()=>{
        console.log("hello");

    },[]);

    const handleCount=()=>{
        setCount(count+1);
        console.log(count);
    }

    const handleName=()=>{
        console.log( "name is",name,"sdewdsc" `${count}`);
    }



    return (
        <>
        <h1>{name}</h1>
        <h1>Data fetched</h1>
        <button onClick={handleCount}>Click</button>
        </>

    );
}