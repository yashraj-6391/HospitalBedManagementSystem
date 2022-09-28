import React,{Component} from 'react';


import HospitalService from '../services/HospitalService'

class showDoctorsForHospitals extends Component{
    constructor(props){
        super(props);
        this.state={
           docarr:[]
        }
        
    }

    componentDidMount(){

        const email=sessionStorage.getItem("validEmail")
       HospitalService.getAllDoctors(email).then((response)=>{
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
            </>
        )
    }
}

export default showDoctorsForHospitals;