import React from 'react';
import Button from 'react-bootstrap/Button';

import { toast,ToastContainer } from 'react-toastify';

import HospitalService from '../services/HospitalService'
import hospitalService from "../services/hospital.service";


class EnqListComponent extends React.Component{

    constructor(){
        super()
        this.state={
            enqarr:[],
            emptyarr:[] ,
            databody:{ id:0,
                name: "",
                email: "",
                password: "",
                contactNumber: "",
                gender: "",
                city: "",
                state: "",
                pincode: 0,
                status: "",
                bedType:"",
                hospital: {
                  id: 0,
                  name: "",
                  email: "",
                  password: "",
                  contactNumber: "",
                  city: "",
                  state: "",
                  status: "",
                  totalNormalBeds: 0,
                  occupiedNormalBeds: 0,
                  totalOxygenBeds: 0,
                  occupiedOxygenBeds: 0,
                  totalICUBeds: 0,
                  occupiedICUBeds: 0
                }
               
            }
            
        }
    }

    

componentDidMount(){

    var email = sessionStorage.getItem("validEmail");
    // console.log(`${email}`)
   
    HospitalService.getallEnquiries(`${email}`).then((response)=>{
         
    this.setState({enqarr:response.data})
    console.log("1")
     console.log(response.data)

    })
 };


 acceptEnquiry(enquiry){

  const URL="http://localhost:8080/api/hospital/accept/updatePatient"
  console.log("2")
    console.log(enquiry)

    this.state.databody.id=enquiry.patient.id;
    this.state.databody.name=enquiry.patient.name;
    this.state.databody.email=enquiry.patient.email;
    this.state.databody.password=enquiry.patient.password;
    this.state.databody.contactNumber=enquiry.patient.contactNumber;
    this.state.databody.gender=enquiry.patient.gender;
    this.state.databody.city=enquiry.patient.city;
    this.state.databody.state=enquiry.patient.state;
    this.state.databody.pincode=enquiry.patient.pincode;
    this.state.databody.status=enquiry.patient.status;
    this.state.databody.hospital=enquiry.hospital
    this.state.databody.bedType=enquiry.bedtype.toUpperCase();
    console.log("3")
    console.log(enquiry.bedtype)
      
 
   console.log(this.state.databody)

    const myJSON = JSON.stringify(this.state.databody);
    console.log('******* json **********')
    console.log(myJSON)

    // axios.put(URL,myJSON,).then((response)=>{
    //     alert(`${response}`)
    // })

    hospitalService.update(myJSON).then((response)=>{
       
        toast.success('Request accepted!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
           console.log(response)
         })

    this.rejectEnquiry(enquiry);
      

 }

 rejectEnquiry(enquiry){

    console.log(enquiry)

    HospitalService.deleteEnqiry(`${enquiry.id}`).then((response)=>{
      
        
        // toast.success('Enquiry Deleted Successfully', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     });


            var email = sessionStorage.getItem("validEmail");
            // console.log(`${email}`)
           
            HospitalService.getallEnquiries(`${email}`).then((response)=>{
                 
            this.setState({enqarr:response.data})
            console.log("1")
             console.log(response.data)
        
            })
        
    }
    )
 }



    

    render(){
        return(
            <div >

        
<div style={{backgroundColor:'bisque'}}>
   <h1 className="text-center" style={{color:"black",padding:"20px"}}>Enquiry List</h1>
   <table className="table table-stripped table-bordered">
  <thead>
      <tr>
          <th>Enquiry id </th>
          <th>Hospital Name</th>
          <th>Patient id</th>
          <th>Patient name</th>
          <th>Patient email</th>
          <th>Patient covid status</th>
          <th>Bed type</th>
          <th>Accept a enquiry</th>
          <th>Reject a enquiry</th>
          {/* <th>Remove</th> */}
       </tr>
  </thead>
  <tbody>
      {
          this.state.enqarr.map((enquiry,index)=>
             <tr key={index}>
                <td>{enquiry.id}</td>
                <td>{enquiry.hospital.name}</td>
                <td>{enquiry.patient.id}</td>
                <td>{enquiry.patient.name}</td>
                <td>{enquiry.patient.email}</td>
                <td>{enquiry.patient.status}</td>
                 <td>{enquiry.bedtype}</td>
                <td> <Button variant="success"
                 onClick={()=>this.acceptEnquiry(enquiry)} >Accept</Button></td>
                 <td> <Button variant="danger"
                 onClick={()=>this.rejectEnquiry(enquiry)} >delete</Button></td>
                
                 
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

export default EnqListComponent;