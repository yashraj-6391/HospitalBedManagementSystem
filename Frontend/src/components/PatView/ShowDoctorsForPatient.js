
import React,{Component} from 'react';
import {Link} from 'react-router-dom';


import HospitalService from '../services/HospitalService'

class showDoctorsForPatient extends Component{
    constructor(props){
        super(props);
       
        this.state={
      
            docarr:[]
        }
        
    }

    componentDidMount(){

      //  const { fromNotifications } = this.props.state
       const mail=sessionStorage.getItem("nextEmail");
       HospitalService.getAllDoctors(`${mail}`).then((response)=>{
            this.setState({docarr:response.data})
           console.log(response)
        })
   
      
    };
    
    

    render(){
        return(
            <>
            <div>
                <h1 className="text-center">Doctors List</h1>
                <table className="table table-stripped table-bordered">
               <thead>
                   <tr>
                   <th>Hospital Name</th>
                       <th>Doctor id</th>
                       <th>Doctor Name</th>
                       <th>speciality</th>
                     
                   </tr>
               </thead>
               <tbody>
                   {
                        this.state.docarr.map((data,index)=>
                        <tr key={index}>
                          <td>{data.hospital.name}</td>
                           <td>{data.id}</td>
                           <td>{data.doctorName}</td>
                           <td>{data.speciality}</td>
                       </tr>
                       )
                   }
               </tbody>
               
           </table>

            </div>
            <div>
            <Link to="/showHospitals">Back</Link>
            </div>

            </>
        )
    }
}

export default showDoctorsForPatient;