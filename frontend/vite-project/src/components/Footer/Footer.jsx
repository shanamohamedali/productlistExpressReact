import React from 'react'
import "../Footer/Footer.css"
import { FaLocationArrow, FaPhoenixSquadron, FaPhone, FaPhoneAlt, FaPhoneSlash } from 'react-icons/fa'

export function Footer() {
  return (
    <div className='footer-main-container'>
        <div className='footer-section'>
        <div className='footer-section1'>
        <h4>Quick Links</h4>
        <ul>
            <li>Home </li>
            <li>Products</li>
            <li>About</li>
        </ul>
      </div>
      <div className='footer-section2'>
        <h4>Contact Us</h4>
        <div className='footer-location'>
 <div><FaLocationArrow/> </div>
        <div>HSR Street,<br/>
      Bangalour, India<br/>
       pin-67956</div>
        </div>
        <div>
          <FaPhone/>   +91 6785637423
        </div>
      </div>
      
        </div>
        <hr/>
        <div className='.footer-copyright'>
           <p>Copyright &copy; 2025 DailyGrabs. All rights reserved.</p>. 
        </div>
      
    </div>
  )
}


