
import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import HospitalService from '../services/HospitalService'

import { toast,ToastContainer } from 'react-toastify';

export default class AddDoctor extends React.Component {

   constructor(){
     super()
        this.state={
          
         hospital: {}, doctorName:"", speciality:""
          }
   }





  componentDidMount(){
       const  hospemail=sessionStorage.getItem("validEmail");
     
       HospitalService.getDetails(`${hospemail}`).then((response)=>{
       console.log(response.data)
       this.setState({hospital:response.data})
       })
    }

onsubmits=(event)=>{
  
    event.preventDefault();
        
       const body={
          hospital:this.state.hospital,
          doctorName:this.state.doctorName,
          speciality:this.state.speciality
        }
       
    HospitalService.addDoctor(body).then((response)=>{
            console.log(response)
    
        toast.success('doctor data added successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }).catch((error) => {
           console.log(error)
           toast.error('something went wrong', {
           position: "top-right",
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           });
        })
}
   
  render() {

   
    return (
        <div style={{backgroundColor:"bisque",height:"fitContent"
        }}>
       <Form onSubmit={this.onsubmits}>
         <FormGroup style={{marginTop:"40px"}}>
          <Label for="name">Doctor Name</Label>
          <Input 
          type="text"  required name="name" id="name" placeholder="Doctor Name" 
            onChange={(event)=>this.setState({doctorName:event.target.value})}/>
        </FormGroup>
        <FormGroup>
          <Label for="speciality">Doctor speciality</Label>
          <Input type="text"  required name="speciality" id="speciality" placeholder="Speciality " 
            onChange={(event)=>this.setState({speciality:event.target.value})}/>
        </FormGroup>
       
        <Button style={{marginTop:'30px',marginBottom:'30px'}}>Submit</Button>
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
      </Form>
      
      
      </div>
    );
  }

}
