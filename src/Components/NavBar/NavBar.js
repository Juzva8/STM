import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import Logo from '../../Assets/Logo/Logo.png' 



    const NavBar = (props) => {

    return (
        <div className="NavBar">
       <Navbar collapseOnSelect expand="lg" bg="black" variant="black">
       <NavLink id="NavBar__home" href="/"><img src={Logo} alt="Website"/></NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav.Link id="nav__item" href="/">Home</Nav.Link>
    <Nav.Link id="nav__item" href="/contact">Contact Us</Nav.Link>
    <Nav.Link id="nav__item" href="/singIn">Sing in</Nav.Link>
    
      </Navbar.Collapse>
  </Navbar>
  <br />
        </div>
    )
}

export default NavBar
