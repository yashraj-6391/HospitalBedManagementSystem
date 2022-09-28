import React from 'react';
import {Link} from 'react-router-dom'
import {  useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify';

function AftPatLogin() {

let count=0;
  useEffect(() => {
    
    const email=sessionStorage.getItem("validPatientEmail")
  
   count++
   console.log(count)

   if(count==1){
     
    toast.success(`Loggin successfull as ${email}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
   }
  });


  
    return (
        <div style={{backgroundColor:"bisque",padding:"20px"}}>
            <div>
              <Link style={{marginTop:'20px',marginBottom:'20px'}} to='/showHospitals'><h3>Show Hospitals </h3></Link>
               <br></br>
              <Link style={{marginTop:'20px',marginBottom:'20px'}} to='/singlePatData'><h3> Mydata </h3></Link>
            </div>
            <ToastContainer
            theme="colored"
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
       

      )
  }

  export default AftPatLogin;