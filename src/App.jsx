import React from "react";
import MyButton from "./components/MyButton/MyButton";
import UserName from "./components/UserName/UserName";
const App = () => {

  return (
    <React.Fragment>            {/*alternate to use react Fragment*/}
    <h2>Hello React!</h2>
    <MyButton />
    <br />
    <UserName/>
    </React.Fragment>
  )

};

export default App;
