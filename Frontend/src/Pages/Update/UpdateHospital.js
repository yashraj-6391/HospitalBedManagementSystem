import React,{Component} from 'react';
import {Link} from 'react-router-dom';


updateHospital=(id)=>{
    console.log("In edit function");
    this.props.history.push(`/add/${id}`) 
 }

const Update =()=>{
    return(
        <>
        <h1>This is update  page</h1>
        <div className="row text-right">
            <button className="btn btn-primary"
            onClick={this.updateHospital}>update Hospital</button>
        </div>
       
        </>
    )
}

export default Update 