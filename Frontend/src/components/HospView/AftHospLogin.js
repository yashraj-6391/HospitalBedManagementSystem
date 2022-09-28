import React from 'react';
import {Link} from 'react-router-dom'
import {  useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify';

function AftHospLogin() {

  
let count=0;
useEffect(() => {
  

 count++
 console.log(count)

 if(count==1){
   
  toast.success('Loggin successfull', {
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
              <Link style={{marginTop:'20px',marginBottom:'20px'}} to='/enquiries'><h3>Enquiries about booking bed</h3></Link>
              <br></br>
              <Link style={{marginTop:'20px',marginBottom:'20px'}} to='/doctorsforhospital'><h3> Doctors In Hospital </h3></Link>
              <br></br>
              <Link style={{marginTop:'20px',marginBottom:'20px'}} to='/addDoctor'><h3> Add Doctor</h3></Link>
              <br></br>
              <Link style={{marginTop:'20px',marginBottom:'20px'}} to='/showPatients'><h3> Patients </h3></Link>
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

  export default AftHospLogin;