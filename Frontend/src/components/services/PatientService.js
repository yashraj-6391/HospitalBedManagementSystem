import axios from 'axios';

const Base_URL="http://localhost:8080/api"

class PatientService{

    getAllDoctors(hospId){
        return axios.get(Base_URL+"/patient/showAllDoctors/"+hospId)
    }

    getAllHospitals(){
        return axios.get(Base_URL+"/patient/showAllHospitals")
    }

   getDetails(email){
       return axios.get(Base_URL+"/patient/details/"+email)
   }

  
    savePatient(patient){
        return axios.post(Base_URL+"/patient/registerPatient",patient,{headers:{
            'Content-Type':'application/json'
         }})
    }

    makeEnquiry(Enquiry){
        axios.post(Base_URL+"patient/createEnquiry",Enquiry,{headers:{
            'Content-Type':'application/json'
         }})
    }

   

   
}

export default new PatientService();


// import httpClient from '../http-common';

// const getAll = () => {
//   return httpClient.get('');
// };

// const create = (data) => {
//   return httpClient.post('', data);
// };

// const get = (id) => {
//   return httpClient.get(`${id}`);
// };

// const update = (data) => {
//   return httpClient.put('', data);
// };

// const remove = (id) => {
//   return httpClient.delete(`/${id}`);
// };

// export default { getAll, create, get, update, remove };