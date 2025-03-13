// export function UserName(props) {
//   const name = "John";
//   console.log("props", props);

//   return (
//     <>
//       <h3>{props.UserName}</h3>
//       <p className={props.className}>{props.className}</p>
//     </>

//   );
// }

//using destructuring

export function UserName(props) {
  const { userName, className, bgColor } = props;
  return (
    <>
    
      {/* <h3 style="background-color:orange">{userName + "verified"}</h3> */}

      <h3
        style={{
          color: "red",
          // background-color:'green',
          backgroundColor: bgColor,
        }}
      >
        {userName +" "+ "verified"}
      </h3>
      <p className={className}>{className}</p>

      
    </>
  );
}
