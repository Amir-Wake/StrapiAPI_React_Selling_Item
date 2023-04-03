import React from 'react'
import './About.css'
import {GrMapLocation} from 'react-icons/gr'
import {FiPhoneCall} from 'react-icons/fi'
function About() {
  return (
    <div className='about'>
        <div className='container'>
            <div className='header'>
                <h1>About Us</h1>
            </div>
     <div className='about-text'>
        <h5>
        Our team of...
        </h5>
     </div>
     <ul>
        <li>
     <div className="address">
                <h3 className="text-uppercase"><GrMapLocation/> Address</h3>
                <h5>Address<br/>Postcode</h5>
     </div>
     </li>
     <li>
     <div className="phone">
                <h3 className="text-uppercase"><FiPhoneCall/> Phone Number</h3>
                <h5><br/>000000000</h5>
     </div>
     </li>
     </ul>
     </div>
    </div>
  )
}

export default About