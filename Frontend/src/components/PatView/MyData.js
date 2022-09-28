import React,{Component} from 'react';


import PatientService from '../services/PatientService'

class MyData extends Component{
    constructor(props){
        super(props);
        this.state={
          mydata:{},
          hospitalName:"",
          bedType:""
        }
        
    }

    componentDidMount(){

        const email=sessionStorage.getItem("validPatientEmail")
      PatientService.getDetails(email).then((response)=>{
            this.setState({mydata:response.data})
            if(response.data.hospital === null){
               this.setState({hospitalName:"Not assigned"})
            }else{
                this.setState({hospitalName:response.data.hospital.name})
            };
            if(response.data.bedType === null){
               this.setState({bedType:"Not assigned"})
            }else{
                this.setState({bedType:response.data.bedType})
            }
            console.log(response.data)
        })
      
    };
    
    

    render(){
        return(
            <>
            <div style={{backgroundColor:"#fff0f5"}}>
                <div style={{padding:"20px"}} >
                <h1 className="text-center" style={{color:"brown"}}>Patient data</h1>
                <h3 className="text-center" style={{color:"brown"}}>{this.state.mydata.email}</h3>
                </div>
              
                <table className="table table-stripped table-bordered">
               <thead >
                   <tr>
                       <th>Patient id</th>
                       <th>Patient Name</th>
                       <th>Patient email</th>
                       <th>Patient Hospital</th>
                       <th>Patient Bedtype</th>
                       <th>Covid status</th>
                   </tr>
               </thead>
               <tbody>
                   {
                     
                          <tr >
                             <td>{this.state.mydata.id}</td>
                             <td>{this.state.mydata.name}</td>
                             <td>{this.state.mydata.email}</td>
                             <td>{this.state.hospitalName}</td>
                             <td>{this.state.bedType}</td>
                             <td>{this.state.mydata.status}</td>
                         </tr>
                       
                   }
               </tbody>
           </table>

            </div>
            </>
        )
    }
}

export default MyData;

// if(this.state.hospital.name==null){
//     <td>{"Not assigned"}</td>
// }else{<td>this.state.hospital.name</td>}
//  if(this.state.mydata.bedType==null){
//     <td>{"Not assigned"}</td>
// }else{<td>this.state.mydata.bedType</td>}