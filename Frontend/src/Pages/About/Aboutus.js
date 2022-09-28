import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Aboutus.css'

const Aboutus = () => {
return (

	<div>
        
	<div className="about">
	  <div className="aboutus">
          
		<div className="box">
            
		  <br></br>
		<div className="Box-mb3">
		  <h1 id="h2" style={{color:'bisque'}}> About us</h1>
		  <h2 id="label" style={{color:'bisque'}}>
			{/* ,height:700 */}
			The purpose of the Hospital Bed Management System is to computerize all details regarding patient details and hospital details.
It has a real-time status of all the available beds and the bed occupied, to plan for the efficient use of beds. 
It helps the staff and management by reducing the time of counting and recording the availability of beds.
             It also helps patients to find the hospitals bed availibility status and shows doctors specialities in
respective hospital.

		  </h2>
		  </div>
		</div>
	  </div>
	</div>
  </div>

);
};

export default Aboutus

