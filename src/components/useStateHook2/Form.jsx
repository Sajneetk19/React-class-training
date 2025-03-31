import React, { useState } from "react";
function Form() {
    const [name,setName] = useState();
    const [email,setEmail] =useState('');
const handleForm=(e)=>{
     e.preventDefault();
     console.log("my name is"+" "+name+"and My email is "+" "+email)
     console.log(`my name is ${name} and My Email is ${email}`);
     setName('');
     setEmail('');
}
  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          <div>
            <label>Name</label>
            <input placeholder="enter nam here" type="text" required value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div>
            <label>Email</label>
            <input placeholder="enter email here" type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;

