
import axios from 'axios';

const Base_URL="http://localhost:8080/api"

class HospitalService{

    getAllDoctors(email){
        return axios.get(Base_URL+"/hospital/showMyHospDoctors/"+email)
    }

    getAllPatients(email){
        return axios.get(Base_URL+"/hospital/patients/"+email)
    }

    saveHospital(hospital){
        return axios.post(Base_URL+"/hospital/registerHospital",hospital,{headers:{
            'Content-Type':'application/json'
         }})
    }

    updateHospital(hospital){
      return axios.put(Base_URL+"/hospital/update",hospital,{headers:{
          'Content-Type':'application/json'
       }})
   }

    addDoctor(databody){
        return axios.post(Base_URL+"/hospital/addDoctor",databody,{headers:{
            'Content-Type':'application/json'
         }})
    }

    getDetails(email){
        return axios.get(Base_URL+"/hospital/details/"+email)
    }

    updatePatient(PatientData){
        return axios.post(Base_URL+"/hospital/accept/updatePatient",PatientData,{headers:{
            'Content-Type':'application/json'
         }})
    }

     validateHospital(email,password){
        return axios.get(Base_URL+`/hospital/login/${email}/${password}`)
    }

    getallEnquiries(email){
        return axios.get(Base_URL+`/hospital/enquiries/${email}`)
    }

    deleteEnqiry(id){
        return axios.delete(Base_URL+'/hospital/enquiry/delete/'+id)
    }

    deletePatient(id){
        return axios.delete(Base_URL+"/hospital/deletePatient/"+id)
    }

  

   
}

export default new HospitalService();




// import httpClient from '../http-common';

// const getAll = () => {
//   return httpClient.get('/patient/showAllHospitals');
// };

// const create = (data) => {
//   return httpClient.post('/hospital/registerHospital', data);
// };

// const get = (id) => {
//   return httpClient.get(`/hospital/details/${id}`);
// };

// const update = (data) => {
//   return httpClient.put('', data);
// };

// const remove = (id) => {
//   return httpClient.delete(`/${id}`);
// };

// const getAllDoctors = (id) => {
//   return httpClient.get(`/hospital/showMyHospDoctors/${id}`);
// };

// export default { getAll, create, get, update, remove, getAllDoctors };
























// import axios from 'axios';

// const Base_URL="http://localhost:8080/api/"

// class HospitalService{

//     getAllDoctors(hospId){
//         return axios.get(Base_URL+"/hospital/showMyHospDoctors/"+hospId)
//     }

//     getAllPatients(hospId){
//         return axios.get(Base_URL+"/hospital/showAllPatients/"+hospId)
//     }

//     saveHospital(hospital){
//         return axios.post(Base_url+"/hospital/registerHospital",hospital,{headers:{
//             'Content-Type':'application/json'
//          }})
//     }

//    createBill(Bill){
//         return axios.post(Base_url+"/hospital/createBill",Bill,{headers:{
//             'Content-Type':'application/json'
//          }})
//     }


//     addDoctor(Doctor){
//         return axios.post(Base_url+"/hospital/addDoctor",Doctor,{headers:{
//             'Content-Type':'application/json'
//          }})
//     }
// }

// export default new HospitalService();