import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { toast,ToastContainer } from 'react-toastify';


const PatientSignup=() =>{
  const url="http://localhost:8080/api/patient/registerPatient"
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[contactNumber,SetConatctNumber]=useState("")
  const[city,setCity]=useState("");
  const[state,setState]=useState("");
  const[status,setstatus]=useState("");
  const[pincode,setPincode]=useState("");
  const[gender,setgender]=useState("");
  
 
  const body={
    name,
    email,
    password,
    contactNumber,
    gender,
    city,
    state,
    status,
    pincode,
    hospital:null,
    bedType:null,
    enquiry:null
  
  }

  
 

  const signup=(event)=>{
    event.preventDefault();
   console.log(body)
    axios.post(url,body
    ).then((response) => {
       console.log(response.data)
       toast.success(`Detalis Registered for ${response.data.email}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

       }).catch((error)=>{
         console.log(error)

         toast.error(`Something went wrong ,Please retry`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
       })

    }


 



  


  return (
    <>
    <div  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} >
    <Form  style={{width:"600px"}}
      onSubmit={signup}>
        <FormGroup  style={{padding:'20px'}}>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" required placeholder="Enter Name of patient " 
          onChange={(e) => {
            setName(e.target.value)
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" required name="email" id="exampleEmail" placeholder="Enter email" 
             onChange={(e) => {
              setEmail(e.target.value)
            }}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" required name="password" id="examplePassword" placeholder="Enter password " 
        onChange={(e) => {
          setPassword(e.target.value)
        }}/>
        </FormGroup>
       
        <FormGroup>
          <Label for="ContactNumber">Contact Number</Label>
          <Input type="text" required  name="ContactNumber" id="ContactNumber" placeholder="Enter contact number "
           onChange={(e) => {
            SetConatctNumber(e.target.value)
          }} />
        </FormGroup>
       
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" required name="city" id="city" placeholder="Enter city " 
             onChange={(e) => {
              setCity(e.target.value)
            }}/>
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input type="text" required name="state" id="state" placeholder="Enter state " 
            onChange={(e) => {
              setState(e.target.value)
            }}/>
        </FormGroup>
        <FormGroup>
          <Label for="pin">Pincode</Label>
          <Input type="text" required name="pin" id="pin" placeholder="Enter total Normal beds " 
           onChange={(e) => {
            setPincode(e.target.value)
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="gender">Gender</Label>
          <Input type="select"  required name="gender" id="gender" 
            onChange={(e) => {
              setgender(e.target.value)
            }}>
              <option>SELECT</option>
            <option>MALE</option>
            <option>FEMALE</option>
            
         </Input>
        </FormGroup>
        <FormGroup>
          <Label for="status">Covid Status</Label>
          <Input type="select" required name="select" id="status" 
            onChange={(e) => {
              setstatus(e.target.value)
            }}>
              <option>SELECT</option>
            <option>POSITIVE</option>
            <option>NEGATIVE</option>
            
         </Input>
        </FormGroup>
       
       
       
        
        <Button >Submit</Button>
      </Form>
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
   </div>
   </>
  );
}


export default PatientSignup;