import React from 'react';
import {Link} from 'react-router-dom'
import hospital from './Hospital.jpg'
import patient from './Patient.jpg'
import {Card,CardBody,CardSubtitle,CardText,CardTitle,Button} from'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

function SignupPage() {
    return (
      <div  style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }} >
        <div   style={{marginTop:'100px'}}>
        <Card
  style={{
    width: '18rem'
  }}
>
<Link to="/registerHosp">
          <img style={{width:'286.02px',height:'225.01px'}}
            src={hospital}
            alt="example"
          />
        </Link>

       
  <CardBody>
    <CardTitle> <Nav>
          <NavItem>
            <NavLink href="/registerHosp"><h2 style={{marginLeft:'50px'}}>Hospital</h2></NavLink>
          </NavItem>
          </Nav></CardTitle>
  
  
  </CardBody>
</Card>
        </div>
       

        <div style={{marginLeft:'100px',marginTop:'100px'}}>

        <Card
  style={{
    width: '18rem'
  }}
>
<Link to="/registerPatient">
          <img style={{width:'286.02px',height:'225.01px'}}
            src={patient}
            alt="example"
          />
        </Link>
  <CardBody>
  <CardTitle> <Nav>
          <NavItem>
            <NavLink href="/registerPatient"><h2  style={{marginLeft:'50px'}}>Patient</h2></NavLink>
          </NavItem>
          </Nav></CardTitle>
  
  
  </CardBody>
</Card>
          
        </div>
       



      </div>

      )
  }

  export default SignupPage;

