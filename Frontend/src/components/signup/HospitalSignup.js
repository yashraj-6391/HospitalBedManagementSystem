import React, { useState,useEffect} from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { toast,ToastContainer } from 'react-toastify';

const HospitalSignup=()=> {

  const url="http://localhost:8080/api/hospital/register"

  const[name,setname]=useState();
  const[email,setemail]=useState();
  const[password,setpassword]=useState();
  const[contactNumber,setcontactnumber]=useState();
  const[city,setcity]=useState();
  const[state,setstate]=useState();
  const[status,setstatus]=useState();
  const[totalNormalBeds,settotalNormal]=useState();
  const[occupoedNormalBeds,setoccupiedNormal]=useState();
  const[totalOxygenBeds,settotaloxygen]=useState();
  const[ocupiedOxygenBeds,setoccupiedoxygen]=useState();
  const[totalICUBeds,settotalicu]=useState();
  const[occupiedICUBeds,setoccupiedicu]=useState();



  const body={
    name,
    email,
    password,
    contactNumber,city,state,status,totalNormalBeds,totalOxygenBeds,totalICUBeds,
    occupoedNormalBeds,ocupiedOxygenBeds,occupiedICUBeds
  }

  const signupHosp=(event)=>{
    

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
         })
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
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
      <Form  style={{justifyContent:"center",width:"600px"}}
      onSubmit={signupHosp}>
        <FormGroup style={{marginTop:"40px"}} >
          <Label for="name">Name</Label>
          <Input type="text" required name="name" id="name" placeholder="Enter Name of hospital " 
           onChange={(e) => {
            setname(e.target.value)
          }} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" required name="email" id="exampleEmail" placeholder="Enter email" 
           onChange={(e) => {
            setemail(e.target.value)
          }} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" required name="password" id="examplePassword" placeholder="Enter password " 
           onChange={(e) => {
            setpassword(e.target.value)
          }} />
        </FormGroup>
       
        <FormGroup>
          <Label for="ContactNumber">Contact Number</Label>
          <Input type="text" required name="ContactNumber" id="ContactNumber" placeholder="Enter contact number " 
           onChange={(e) => {
            setcontactnumber(e.target.value)
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" required name="city" id="city" placeholder="Enter city " 
           onChange={(e) => {
            setcity(e.target.value)
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input type="text" required name="state" id="state" placeholder="Enter state "  
          onChange={(e) => {
            setstate(e.target.value)
          }} />
        </FormGroup>
       
      
        <FormGroup>
          <Label for="tnb">Total Normal Beds</Label>
          <Input type="number" required name="tnb" id="tnb" placeholder="Enter total Normal beds " 
           onChange={(e) => {
            settotalNormal(e.target.value)
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="onb">Occupied Normal Beds</Label>
          <Input type="number" required name="onb" id="onb" placeholder="Enter Occupied Normal beds "
           onChange={(e) => {
            setoccupiedNormal(e.target.value)
          }} />
        </FormGroup>
        <FormGroup>
          <Label for="tob">Total Oxygen Beds</Label>
          <Input type="number" required name="tob" id="tob" placeholder="Enter total Normal beds " 
           onChange={(e) => {
            settotaloxygen(e.target.value)
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="oob">Occupied Normal Beds</Label>
          <Input type="number" required name="oob" id="oob" placeholder="Enter total Normal beds "
           onChange={(e) => {
            setoccupiedoxygen(e.target.value)
          }} />
        </FormGroup>
        <FormGroup>
          <Label for="tib">Total ICU Beds</Label>
          <Input type="number"  required name="tib" id="tib" placeholder="Enter total Normal beds " 
           onChange={(e) => {
            settotalicu(e.target.value)
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="oib">Occupied ICU Beds</Label>
          <Input type="number"  required name="oib" id="oib" placeholder="Enter total Normal beds " 
           onChange={(e) => {
            setoccupiedicu(e.target.value)
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Covid Treatment</Label>
          <Input type="select" requied name="select" id="exampleSelect"
          
          onChange={(e) => {
            setstatus(e.target.value)
          }}>
            <option>PLEASE SELECT ONE</option>
            <option>AVAILABLE</option>
            <option>NOTAVAILABLE</option>
         </Input>
        </FormGroup>
        <Button style={{marginTop:'30px',marginBottom:'30px'}}>Submit</Button>
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
    );
  
}

export default HospitalSignup;