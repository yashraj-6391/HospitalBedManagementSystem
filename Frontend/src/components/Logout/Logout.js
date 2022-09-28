//import Accordion from 'react-bootstrap/Accordion'
//import { useNavigate } from 'react-router'

//import 'bootstrap/dist/css/bootstrap.min.css';
const Logout = () => {
  //const navigate = useNavigate()
  sessionStorage.removeItem("validEmail")
  sessionStorage.removeItem("validPatientEmail")
  

  return (
      <div style={{backgroundColor:'paleturquoise'}}>
    <div style={{justifyContent:'center',width:'100%',height:'fitContent'}}>
      <h2 style={{padding:'30px'}}>Logout successful</h2>
      <a href='/'><h3 style={{padding:'30px'}}>To home page</h3></a>
    </div>
    </div>
  )

}

export default Logout;