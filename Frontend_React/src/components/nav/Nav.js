import React from 'react'
import './Nav.css'
import { Navbar,Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

function Nav() {

  return (
    <div>
<Container>
      <Navbar className="navbar" expand="md" fixed="top" >
        <Container>
        <a className="navbar-logo"  >
     <h5><a className='nav-name' href='/'>CompanyLogo</a></h5> 
    </a>

    <ul className='nav-links'>
        <li>
            <a href='/'>Home</a>
            <a href='/new'>New Clothes</a>
            <a href='/women'>Women Clothes</a>
            <a href='/men'>Men Clothes</a>
            <a href='/kids'>Kids Clothes</a>
        </li>
    </ul>

    <ul className='nav-btn'>
        <li>    
        <a class="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <p className='menu'><span><FontAwesomeIcon icon={faBars} /></span></p> </a>        
        </li>
    </ul>
      </Container>
      </Navbar>
   
</Container>

{/* Canvas Start */}
<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" collapseOnSelect aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Company Logo</h5>
    <button id='close-button' type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <ul className='offcanvas-links'>
        <li className='nav-item'>
            <a href='/'  >Home</a> </li>
            <li className='nav-item' >
            <a href='/New'>New Clothes</a></li>
            <li className='nav-item' >
            <a href='/women'>Women Clothes</a></li>
            <li className='nav-item'>
            <a href='/Men'>Men Clothes</a> </li>
            <li className='nav-item'>
            <a href='/Kids' >Kids Clothes</a>
        </li>
    </ul>
  </div>
</div>
{/* Canvas End */}
    </div>
    
  )
}

export default Nav