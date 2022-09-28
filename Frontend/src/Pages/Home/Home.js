import './Home.css'
import logo from './logo.jpg';
import TopSlider from '../TopSlider'

const Home=()=>{
    return(
        <>
        <TopSlider/>
        {/* <h1 className='heading'> Welcome</h1> */}
        
        {/* <div className='image'>
        <img style={{width:'1600px',height:'500px'}}src={logo} alt="Logo" />;
        </div> */}
        <div  className='cards'>
        <h4 className='text'>The purpose of the Hospital Bed Management System is to computerize all details regarding patient details and hospital details.
It has a real-time status of all the available beds and the bed occupied, to plan for the efficient use of beds. 
It helps the staff and management by reducing the time of counting and recording the availability of beds.
             It also helps patients to find the hospitals bed availibility status and shows doctors specialities in
respective hospital.
        </h4>
        </div>
       
      
      
       
        </>
    )
}

export default Home;