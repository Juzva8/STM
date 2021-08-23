import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import './Header.css'

function Header() {
    return (
        <div className="Header">
       <Navbar collapseOnSelect expand="lg" bg="black" variant="black">
    <Navbar.Brand href="/">STRATTON TERRACE MARKETING</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav.Link id="nav__item" href="/">Home</Nav.Link>
    {/* <Nav.Link id="nav__item" href="/gallery">Gallery</Nav.Link> */}
      <Nav.Link id="nav__item" href="/contact">Contact Us</Nav.Link>
      </Navbar.Collapse>
  </Navbar>
  <br />
        </div>
    )
}

export default Header
