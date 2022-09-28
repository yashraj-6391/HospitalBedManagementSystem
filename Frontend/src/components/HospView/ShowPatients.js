import React from 'react';
import Button from 'react-bootstrap/Button';
import { toast,ToastContainer } from 'react-toastify';
import axios from 'axios'


import HospitalService from '../services/HospitalService'


class ShowPatientComponent extends React.Component{

    constructor(){
        super()
        this.state={
            parr:[],
            searcharr:[],
            emptyarr:[],
            flag:false,
            patient_d:{}
        }
    }

    

    url="http://localhost:8080/api/hospital/login"

    componentDidMount(){

        var email = sessionStorage.getItem("validEmail");
    console.log(`${email}`)

       HospitalService.getAllPatients(`${email}`).then((response)=>{
         
            this.setState({parr:response.data})
           // this.setState({searcharr:response.data})

           console.log(response.data)

         

           this.setState({emptyarr:this.state.parr.filter((patient)=>{
            return patient.hospital.email.includes(`${email}`)
        })})
           
        })

        
      
    };



    deletePatient(patient){
   console.log(patient)
 this.setState({patient_d:patient})
   const URL="http://localhost:8080/api/hospital/deletePatient"

   axios.post(URL,patient).then((response)=>{
       const returnInfo=response.data;

       toast.info(`${returnInfo}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });


        this.componentDidMount();


        


        
   })
 }
    

    render(){
        return(
            <div >

        
<div style={{backgroundColor:'bisque'}}>
   <h1 className="text-center" style={{color:"black",padding:"20px"}}>Patient List</h1>
   <table className="table table-stripped table-bordered">
  <thead>
      <tr>
          <th>Patient id</th>
          <th>Patient Name</th>
          <th>Patient Email</th>
          <th>Patient contact number</th>
          <th>Covid status</th>
          <th>Bedtype</th>
          <th>Remove</th>
       </tr>
  </thead>
  <tbody>
      {
          this.state.emptyarr.map((patient,index)=>
             <tr key={index}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.email}</td>
                <td>{patient.contactNumber}</td>
                <td>{patient.status}</td>
                <td>{patient.bedType}</td>
             <td> <Button variant="danger"
                                 onClick={()=>this.deletePatient(patient)} >delete</Button></td>
                
                 
            </tr>
          )
      }
  </tbody>
</table>
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
       

           
            </div>
        )
    }
}

export default ShowPatientComponent;

