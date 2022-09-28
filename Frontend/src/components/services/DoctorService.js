import httpClient from '../http-common';

const getAll = () => {
  return httpClient.get('');
};

const create = (data) => {
  return httpClient.post('', data);
};

const get = (id) => {
  return httpClient.get(`${id}`);
};

const update = (data) => {
  return httpClient.put('', data);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};

export default { getAll, create, get, update, remove };








// import axios from 'axios';

// const Base_URL="http://localhost:8080/api"

// class DoctorService{

//     getAllMyWorkHospitals(doctorId){
//         return axios.get(Base_URL+"/doctor/showMyHospitals/"+doctorId)
//     }

//     savemydetails(doctor){
//         return axios.post(Base_url+"/doctor/registerDoctor",doctor,{headers:{
//             'Content-Type':'application/json'
//          }})
//     }

    


}

export default new DoctorService();