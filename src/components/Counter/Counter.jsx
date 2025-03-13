import { useState } from "react";

//this is wothou using usestate it is executing count but on console not on UI.
// export function Counter() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log("count", count);
//   }

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </>
//   );
// }

// using usestate here

export function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}
