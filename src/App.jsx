import React from "react";
import "./App.css";
import UseState from "./components/useStateHook";
// import MyButton from "./components/MyButton/MyButton";
// import UserName from "./components/UserName/UserName";
const App = () => {
  // return (
  //   <React.Fragment>            {/*alternate to use react Fragment*/}
  //   <h2>Hello React!</h2>
  // <MyButton />
  //   <br />
  //   <UserName/>
  //   </React.Fragment>
  // )

  return (
    <>
      <h2>Hello React!</h2>
      {/* <MyButton />
      <UserName /> */}

      {/* <button className="bg-green">ZORA BUTTON</button>
      <UserName
        className="bg-green"
        a="test"
        UserName="John"
        bgColor="green"
      ></UserName>
      <UserName
        className="bg=green"
        a="test"
        UserName="Sajneet"
        bgColor="orange"
      ></UserName> */}

      {/* <p>{isLoggedIn && "Is Logged In"}</p>
      <LoginStatus />
      <ProductList/> */}
      {/* <MyButton/> */}
      <UseState/>
    </>
  );
};

export default App;
