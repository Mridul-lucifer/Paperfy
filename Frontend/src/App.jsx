import { useState } from 'react'
import './App.css'
import Axios from 'axios';

function App() {
  const[msg,setMsg]=useState("");
  const func = async function(event){
      event.preventDefault();
      try{
      const response = await axios.post('http://localhost:5000/greet',{});
      if(response){
          setMsg(response.data.msg);
          alert("Output : "+response.data.msg);
      }else{
          alert("Error ")
      }
  }catch(err){
      console.log(err);
  }
  }

  return (
    <>
    <div>
      <button onClick={()=>func()}>click me</button>
      {msg && <p>${msg}</p>}
    </div>
    </>
  )
}

export default App
