import React from "react";
import "./contactStyle.css";
//import Bg2 from './bg2.jpg'
import Bg2 from './AAA.PNG'

function Contact() {
  return (
    <>
      <div 
      style ={{backgroundImage:`url(${Bg2})`}}
      >
        {/* Contact */}
        <div className="contact">
          <div className="container-fluid">
            <div className="row row-xl-eq-height">
              {/* Contact Content */}
              <div className="col-xl-6">
                <div className="contact_content">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="contact_about">
                        <div className="logo_container">
                          <a href="#">
                            <div className="logo_content d-flex flex-row align-items-end justify-content-start">
                              <div className="logo_img">
                                <img src="../images/logo.jpg" alt="" />
                              </div>
                             
                            </div>
                          </a>
                        </div>
                        {/* <div className="contact_about_text">
                          <p>
                          The purpose of the Hospital Bed Management System is to computerize all details regarding patient details and hospital details.
It has a real-time status of all the available beds and the bed occupied, to plan for the efficient use of beds. 
It helps the staff and management by reducing the time of counting and recording the availability of beds.
             It also helps patients to find the hospitals bed availibility status and shows doctors specialities in
respective hospital.
                          </p>
                        </div> */}
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact_info_container">
                        <div className="contact_info_main_title">
                         <h1 style={{color:"black"}}><b>Contact Us</b></h1> 
                        </div>
                        <div className="contact_info">
                          <div className="contact_info_item">
                            <div className="contact_info_title"><h3 style={{color:"black"}}><b>Address:</b></h3></div>
                            <div className="contact_info_line">
                            <h4 style={{color:"black"}}><b>Akurdi,pune</b></h4> 
                            </div>
                          </div>
                          <b></b>
                          <b></b>
                          <b></b>
                          <div className="contact_info_item">
                            <div className="contact_main_title"><h3><b>Phone:</b></h3></div>
                            <div className="contact_main_title">
                            <h4> <b>9922101492,7057292200</b>  </h4>
                            </div>
                          </div>
                          <div className="contact_info_item">
                            <div className="contact_main_title"><h3><b>Email:</b></h3></div>
                            <div className="contact_main_title">
                             <h4> <b>Hospitalbedmanagement@gmail.com</b></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* Contact Map */}
              <div className="col-xl-6 map_col">
                <div className="contact_map">
                  {/* Google Map */}
                  <div id="google_map" className="google_map">
                    <div className="map_container">
                      <div id="map" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
