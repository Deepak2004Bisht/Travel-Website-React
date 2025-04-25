/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react';
import { Container, Row, Navbar, Offcanvas, Nav, NavDropdown} from 'react-bootstrap';
// import {NavLink} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 
import './Header.css';


export default function Header() {

  const  [open, setOpen] = useState(false);

  const toggleMenu = () =>{
    setOpen(!open);
  }

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    }
  })

  // Sticky Header
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    if (scrollTop >= 120) {
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }
  }

  // Close menu on scroll
  const closeMenu=()=>{
    if(window.innerWidth <= 991){
      setOpen(false);
    }
  }


  return (
    <header className="header-section">
      <Container>
        <Row>
          <Navbar expand='lg' className="p-0">
            {/* Logo Section */}
            <Navbar.Brand>
              <NavLink to='/'>Weekendmonks</NavLink>
            </Navbar.Brand>
            {/* End Logo Section */}


            <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} aria-labelledby={`offcanvasNavbarLabel-expand-lg`} placement="start" show={open}>

              {/* Mobile Logo section */}
              <Offcanvas.Header>
                <h1 className='logo'>Weekendmonks</h1>
                <span className='navbar-toggler ms-auto' onClick={toggleMenu}>
                  <i className="bi bi-x-lg"></i>
                </span>
              </Offcanvas.Header>
              {/* End mobile Logo section */}

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className='nav-link' to='/' onClick={closeMenu}>HOME</NavLink>
                  <NavLink className='nav-link' to='/about-us' onClick={closeMenu}>ABOUT US</NavLink>
                  <NavLink className='nav-link' to='/tours' onClick={closeMenu}>TOURS</NavLink>
                 
                  <NavDropdown title="DESTINATION" id={`offcanvasNavbarDropdown-expand-lg`}>
                    <NavLink className="nav-link text-dark" to="/destination" onClick={closeMenu}>
                      SPAIN TOURS
                    </NavLink>
                  </NavDropdown>
                  <NavLink className='nav-link' to='/gallery' onClick={closeMenu}>GALLERY</NavLink>
                  <NavLink className='nav-link' to='/contact-us' onClick={closeMenu}>CONTACT</NavLink>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div className='ms-md-4 ms-2'>
              <NavLink className='primaryBtn d-none d-sm-inline-block' to='/booking'>Book Now</NavLink>
              <li className='d-inline-block d-lg-none ms-3 toggle_btn'>
                <i className={open ? 'bi bi-x-lg': 'bi bi-list'} onClick={toggleMenu}></i>
              </li>
            </div>
          </Navbar>
        </Row>
      </Container>
    </header>
  );
}
