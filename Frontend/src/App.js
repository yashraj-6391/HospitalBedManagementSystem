
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'


import HospListComponent from './components/PatView/HospListComponent'
import ShowDoctorsComponent from './components/PatView/ShowDoctorsForPatient'
import SignupComponent from './components/signup/HospitalSignup'
import PatientSignup from './components/signup/PatientSignup'
import ShowPatientComponent from './components/HospView/ShowPatients'
import MyNavbar from './components/navbar/MyNavbar'
import HospitalLogin from './components/login/HospitalLogin'
import PatientLogin from './components/login/PatientLogin'
import AftHospLogin from './components/HospView/AftHospLogin'
import AftPatLogin from './components/PatView/AftPatLogin'
import EnqListComponent from './components/HospView/EnquiryComponent'
import ShowDoctorsForHospital from './components/HospView/showDoctosForHospital'
import ShowDoctorsForPatient from './components/PatView/ShowDoctorsForPatient'
import EnquiryForm from './components/PatView/EnquiryForm'
import MyData from './components/PatView/MyData'
import AddDoctor from './components/HospView/AddDoctor'

import Home from './Pages/Home/Home'
import About from './Pages/About/Aboutus'
import LoginPage from './Pages/Login/LoginPage';
import Contact from './Pages/Contact/Contact'
import  UpdatePage from './Pages/Update/UpdatePage'
import Signup from './Pages/Signup/Signup'
import Logout from './components/Logout/Logout'





function App() {
  return (
    <div>
       {/* <CustomeNavbar/> */}
       <MyNavbar/>
       
 <BrowserRouter>
     <Routes>
       
          <Route path="/" element={<Home/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="/contact" element={<Contact/>}/>
          <Route  path="/LoginPage" element={<LoginPage/>}/>
          <Route  path="/showPatients" element={<ShowPatientComponent/>}/>
          <Route  path="/signup" element={<Signup/>}/>
          <Route  path="/showHospitals" element={<HospListComponent/>}/>
          <Route  path="/showalldocs/:id" element={<ShowDoctorsComponent/>}/>
          <Route  path="/update" element={<UpdatePage/>}/>
          <Route  path="/registerHosp" element={<SignupComponent/>}/> 
          <Route  path="/registerPatient" element={<PatientSignup/>}/> 
          <Route  path="/loginHospital"  element={<HospitalLogin/>}/> 
          <Route  path="/loginPatient"  element={<PatientLogin/>}/> 
          <Route  path="/afthosplogin"  element={<AftHospLogin/>}/> 
          <Route  path="/enquiries"  element={<EnqListComponent/>}/> 
          <Route  path="/aftPatLogin"  element={<AftPatLogin/>}/> 
          <Route  path="/doctorsforhospital"  element={<ShowDoctorsForHospital/>}/>
          <Route  path="/ShowDocsForPat"  element={<ShowDoctorsForPatient/>}/>
          <Route  path="/ShowEnquiryForm"  element={<EnquiryForm/>}/>
          <Route  path="/singlePatData"  element={<MyData/>}/>
          <Route  path="/addDoctor"  element={<AddDoctor/>}/>
          <Route  path="/logout"  element={<Logout/>}/>

 
 
          
          
          
    
     </Routes>
 </BrowserRouter>

 
   
 
   
    </div>
   
   
  );
}

export default App;
