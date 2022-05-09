import React,{useRef, useState } from 'react'

import Quiz1 from './Quiz1';

// import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';

function Header() {
  const [number, setNumber] = useState(0)
const input = useRef(null)
const submitForm=(e)=>{
e.preventDefault();
console.log("inp",input);
setNumber(input.current.value)
}


  return (
      <>
      <form action=''onSubmit={submitForm}>
    <div className='container my-3' >
    {/* <input type="text" id="inputText"  value={text}  onChange={handleOnChange}  className="form-control my-2"  placeholder="Enter number of questions"/> */}
    <input type="text" id="inputText"  className="form-control my-2" ref={input} />
  
      <button type='submit' className="btn btn-dark btn-sm  my-3">Submit</button>
     
      </div>
      </form>


 <Quiz1 number={number}  />
 

 

   
      </>
  )
}

export default Header

