import React, { useState } from "react";

function Practise() {
  const [state, setState] = useState(1);

  function handleClick() {
    setState(!state);
  }
  return (
    <button onClick={handleClick}>
      <img
        src={
          state
            ? "https://images.pexels.com/photos/577513/pexels-photo-577513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            : "https://images.pexels.com/photos/266688/pexels-photo-266688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        style={{ height: "200px", width: "220px" }}
      ></img>
    </button>
  );
}

export default Practise;
