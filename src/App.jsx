import React, { useState } from "react";
import "./App.css";
import Form from "./components/useStateHook/Form";
import Practise from "./components/Bulb/Practise";
// import UseState from "./components/useStateHook";
// import MyButton from "./components/MyButton/MyButton";
// import UserName from "./components/UserName/UserName";
const App = () => {
  const [count,setCount] = useState(0);

  const updateCount=()=>{
    setCount(count+1);}
  
  return (
    <>
      <h2>Hello React!</h2>

      {/* <Form/> */}
      <Practise/>



      {/* <MyButton />
      <UserName className="bg-green" a="test" userName="John" bgColor="green" />
      <UserName
        className="bg-green"
        a="test"
        userName="sajneet"
        bgColor="orange"
      />
      <ProductList />
      <Counter /> */}

     {/* <MyButton count={count} onHandleCount={updateCount}/>
     <MyButton count={count} onHandleCount={updateCount}/>
     <MyButton2 count={count}/> */}

     
    </>
  );
};

export default App;
