import React from 'react';

import PatientService from '../services/PatientService';
import Button from 'react-bootstrap/Button';
import{Link} from 'react-router-dom'

class HospListComponent extends React.Component{

    constructor(){
        super()
        this.state={
            enqarr:[],
            searcharr:[],
            nextemail:"",
            flag:false,
           
        }
    }

    componentDidMount(){
       PatientService.getAllHospitals().then((response)=>{
         
            this.setState({enqarr:response.data})
            this.setState({searcharr:response.data})
           
            console.log(response.data)
        })

        

        
      
    };

    componentDidUpdate(prevProps,prevState){
        //if flag is true means the data is deleted from mongodb so call getemeployee from EmployeeService again
        if(this.state.flag){
            PatientService.getAllHospitals().then((response)=>{
                this.setState({enqarr:response.data,searcharr:response.data,flag:false});
                
            })
        }

     
        //this code will be executed every time we change the value of searchtext
        //when searchteex changes then filter emparr aray
        //if searchtext is empty then searcharr and emparr are same
        //otherwise searcharr will contain only values that matches with search texrt
        if(prevState.searchtext!==this.state.searchtext){
           //console.log("in change searchtext ----"+prevState.searchtext+"------"+this.state.searchtext);
           //if searchtext is not empty then it will find all employee whose name contains
           // the searchtext otherwise searcharr and emparr will be same
           if(this.state.searchtext!=""){
               
               this.setState({searcharr:this.state.enqarr.filter((emp)=>{
                  return emp.name.includes(this.state.searchtext);
              })});
           } else{
               this.setState({searcharr:this.state.enqarr});
           }
      
        }
  }
  //this is a function which will be called when click on the button
  searchHospital=()=>{
      //console.log("in search hopsital")
      if(this.state.searchtext!=""){
        //console.log("in search hopsital not equal")
          this.setState({searcharr:this.state.enqarr.filter((emp)=>{
             return emp.name.includes(this.state.searchtext);
         })});
      } else{
          this.setState({searcharr:this.state.enqarr});
      }
  }

  sayHello=(email)=>{
      console.log(email)
      sessionStorage.setItem("nextEmail", `${email}`)
     
  }

   gotoEnquiryform=(email)=>{
      
       console.log(email);
     sessionStorage.setItem("themail",email)
    const patientmail=sessionStorage.getItem("validPatientEmail")

    console.log(patientmail)

    // PatientService.getDetails(patientmail).then((response)=>{
    //     console.log(response.data)
    //     sessionStorage.setItem("patdata",`${response.data}`)
    // })

  }

    

    render(){
        return(
            <div style={{backgroundColor:'bisque'}}>

        
            <div >
                <h1 className="text-center" style={{color:'black'}}>Hospitals List</h1>
                <table className="table table-stripped table-bordered">
               <thead>
                   <tr>
                       <th>Hospital id</th>
                       <th>Hospital Name</th>
                      <th>Hospital contact number</th>
                      <th>Hospital city</th>
                        <th>Hospital State</th>
                       <th>Covid treatment</th>
                       <th>Total Normal Beds</th>
                       <th>Occupied Normal Beds</th>
                       <th>Total Oxygen Beds</th>
                       <th>Occupied Oxygen Beds</th>
                       <th>Total ICU Beds</th>
                       <th>Occupied ICU Beds</th>
                       <th>Show Doctors</th>
                       <th> Request Bed</th>
                    </tr>
               </thead>
               <tbody>
                   {
                       this.state.searcharr.map((enq,index)=>
                          <tr key={index}>
                             <td>{enq.id}</td>
                             <td>{enq.name}</td>
                           <td>{enq.contactNumber}</td>
                            <td>{enq.city}</td>
                            <td>{enq.state}</td>
                             <td>{enq.status}</td>
                             <td>{enq.totalNormalBeds}</td>
                             <td>{enq.occupiedNormalBeds}</td>
                             <td>{enq.totalOxygenBeds}</td>
                             <td>{enq.occupiedOxygenBeds}</td>
                             <td>{enq.totalICUBeds}</td>
                             <td>{enq.occupiedICUBeds}</td>
                             <td> <Link to={{pathname:`/ShowDocsForPat`}}>
                                     <button type="button" className="btn btn-primary" 
                                      onClick={() => {
                                        this.sayHello(enq.email);
                                       
                                      }}
                                     >view doctors</button> </Link>
                                 </td>
                             <td><Link to={{pathname:`/ShowEnquiryForm`}}>
                                     <button type="button" className="btn btn-success" 
                                      onClick={() => {
                                        this.gotoEnquiryform(enq.email);
                                       
                                      }}
                                     >place Enquiry</button> </Link></td> 
                         </tr>
                       )
                   }
               </tbody>
           </table>

            </div >
              <div style={{backgroundColor:'bisque'}}>
                <div className="row col-md-2 offset-md-5 ">
                 <input type="text" name="search" placeholder="Text to search" 
                 defaltValue={this.state.searchtext}
                 onChange={(event)=>this.setState({searchtext:event.target.value})}></input>
                <button className="btn btn-primary" onClick={this.searchHospital}>search</button>
              </div>
            </div>
            
            </div>
        )
    }
}

export default HospListComponent;

//<Link to={{pathname:`/showalldocs/${enq.id}`}}></Link>
//<Link to={{pathname:`/ShowDocsForPat`,state:{email:enq.email}}}></Link>