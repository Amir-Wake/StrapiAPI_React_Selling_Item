import React from "react"
import './Footer.css'
import { SocialIcon } from 'react-social-icons';

const FooterBottom = () => <footer className="page-footer font-small  blue pt-4">
   <div className="footer-in">
            <ul>
                <li>
            <div className="footer-logo">
                <h1 className="text-footer">Compnay Name</h1>
            </div>
            </li>
            <li>
            <div className="icons">
                <h5 className="text-uppercase">Connect With Us</h5>
                <div className="socialicons"><SocialIcon network="facebook"  bgColor="blue" style={{ height: 50, width: 50 }}/></div>  
                <div className="socialicons"><SocialIcon network="email" url="mailto:" bgColor="" style={{ height: 50, width: 50 }}/></div>  
                <div className="socialicons"><SocialIcon network="instagram"  url="" bgColor="" style={{ height: 50, width: 50 }}/>  </div>              
            </div>
            </li>
            </ul>
        
    <hr className="clearfix w-75 d-md-none "/>
    <div className="footer-copyright text-center">© 2023 Copyright: All rights reserved.
This website was created by:
        <a href=""> Creator</a> 
    </div>
    </div>
</footer>

export default FooterBottom