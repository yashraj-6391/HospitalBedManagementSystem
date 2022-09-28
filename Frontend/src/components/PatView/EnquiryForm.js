import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import HospitalService from '../services/HospitalService'
import PatientService from '../services/PatientService'
import patientService from '../services/patient.service'
import { toast,ToastContainer } from 'react-toastify';

export default class EnquiryForm extends React.Component {

  constructor(){
    super()
        this.state={
          
        
          hospital: {},
          patient: {},
          bedtype: ""
         
        }
       
    }





  componentDidMount(){
    const  hospemail=sessionStorage.getItem("themail");
    const patienemail=sessionStorage.getItem("validPatientEmail")
    console.log("1")
     console.log(hospemail);
     console.log("2")
     console.log(patienemail)
    

  HospitalService.getDetails(hospemail).then((response)=>{
    console.log(response.data)
    this.setState({hospital:response.data})
    
  })

    PatientService.getDetails(patienemail).then((response)=>{
      console.log(response.data)
      this.setState({patient:response.data})
    })




   }

 createData=()=>{
  
  if(this.state.bedtype.length>2){
    console.log("*************** databody generated ********")
    console.log(this.state.hospital)
    console.log(this.state.patient)
    console.log(this.state.bedtype)
        
    const Enquiry={
      hospital:this.state.hospital,
      patient:this.state.patient,
      bedtype:this.state.bedtype
    }
       
    patientService.createEnquiry(Enquiry).then((response)=>{
      console.log(response)
    
      toast.success('Your  request placed successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }) .catch(error => {
      console.log(error)
      toast.error('Your previous request is pending try later', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
     })
  }else{
    toast.error('Please select Bedtype', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
   

  }

 


 

 }

  

  render() {

   
    return (
        <div style={{backgroundColor:"bisque",height:"fitContent"
        }}>
      <Form  style={{justifyContent:"center",marginLeft:"500px",width:"600px",padding:"20px"}}
       onSubmit={this.createData}>
      <FormGroup>
          <Label for="bedtype"><h3>Select bed type</h3></Label>
          <Input type="select" name="bedtype" id="bedtype"  value={this.state.bedtype}
           onChange={(event)=>this.setState({bedtype:event.target.value})}
           required
          >
            <option>Please select from Below</option>
            <option>NORMAL</option>
            <option>ICU</option>
            <option>OXYGEN</option>
         </Input>
        </FormGroup>
        <Button onClick={this.createData}>Submit</Button>

      </Form>
      <ToastContainer
      theme='colored'
position="top-right"
autoClose={7000}
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
}