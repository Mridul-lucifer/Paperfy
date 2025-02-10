import React, { useState } from 'react'
import axios from 'axios';
export default function Signup() {
    const [email,setEmail] = useState();
    const [Password,setPassword] =useState();
    const singupFunc = async function () {
        const res = await axios.post('http://localhost:5000/signup',{
            "Email":email,
            "Password":Password
        })
        localStorage.setItem("authToken",res.data.token);
    }
  return (
    <div>
      <form onSubmit={singupFunc}>
        <label>Email : </label>
        <input type='email' onChange={(e)=>setEmail(e.target.value)}></input>
        <label>Password : </label>
        <input type='Password' onChange={(e)=>setPassword(e.target.value)}></input>
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}
