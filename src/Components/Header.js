import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './style.css'

const Header = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" variant="dark" className='bg-darkblue'>
      <Container>
      <Nav>
        <NavLink className='navbar-brand' to="/">TopJobs</NavLink>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;