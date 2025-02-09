import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const Navigate = useNavigate();
    const create_exam = () =>{
        Navigate('/create-exam');
    }
  return (
    <div>
        <button onClick={create_exam}>create Exam</button>
    </div>
  )
}

export default Home