import React from "react";
import "./App.css";
// import UseState from "./components/useStateHook";
// import MyButton from "./components/MyButton/MyButton";
// import UserName from "./components/UserName/UserName";
import { MyButton, UserName, ProductList, Counter } from "./components";
const App = () => {
  return (
    <>
      <h2>Hello React!</h2>
      <MyButton />
      <UserName className="bg-green" a="test" userName="John" bgColor="green" />
      <UserName
        className="bg-green"
        a="test"
        userName="sajneet"
        bgColor="orange"
      />
      <ProductList />
      <Counter />
    </>
  );
};

export default App;
