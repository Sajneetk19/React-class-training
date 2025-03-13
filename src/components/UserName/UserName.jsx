const UserName=(props)=> {
  const UserName = "John";
  console.log("props", props);

  return (
    <>
      <h3>{props.UserName}</h3>
      <p className={props.className}>{props.className}</p>
    </>
  );
} 
export default UserName;

// export function userName(userName,className, bgColor){
//   return (
//     <>
//     <h3 style="background-color:orange;">{userName+'verified'}</h3>
//     <h3 style={{color:'red',backgroundColor:bgColor,}}>{userName+'verified'}</h3>
//     <p className={className}>{className}</p>
//     </>
//   )
// }