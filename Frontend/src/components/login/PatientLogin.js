import './LoginComponent.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const PatientLogin=() =>{
  const url="http://localhost:8080/api/patient/login"
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
 
    const body=
    {
      email,
      password
     }

  const navigate = useNavigate()

  
 

  const onsubmits=(event)=>{
    event.preventDefault();
   
  
 axios.post(url,body)
    .then((response) => {
       console.log(response.data)
       console.log(response.data.email)
    
       sessionStorage.setItem("validPatientEmail", response.data.email);
     

       

       if(response.data.email.includes("fakemail@gmail.com")){
        toast.error('login failed! please retry', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

          setEmail("")
          setPassword("")
         navigate("/loginPatient")
        }else{
         
          navigate("/aftPatLogin")
        }
     })

 }

  return (
    <>
    <div>
        
 
    <form className="form" onSubmit={onsubmits}>
    <h2 style={{marginTop:"20px"}}>Patient Login</h2>
      <p>Enter your Email</p>
      <input className="input" 
      id="email"
       type="text" 
       placeholder="Enter your email"  
       name="email"  
       value={email}
       onChange={(e) => {
        setEmail(e.target.value)
      }}/>
      
      <p>Enter password</p>
      <input className="input" 
      id="password"
       type="password" 
       placeholder="Enter your password"  
       name="password"  
       value={password}
       onChange={(e) => {
        setPassword(e.target.value)
      }}/>
      <br/>
   <button  className="button" type="submit"> Login </button>
   <ToastContainer
   theme='colored'
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
   </form>
   </div>
   </>
  );
}


export default PatientLogin;