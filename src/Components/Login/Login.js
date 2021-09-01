import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import Logo from '../../Assets/Logo/Logo.png' 
import { connect } from "react-redux"



    const Login = (props) => {

    return (
        <div className="Login">
    <Navbar collapseOnSelect expand="lg" bg="black" variant="black">
    <NavLink id="Login__home" href="/"><img src={Logo} alt="Website"/></NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav.Link id="nav__item" href="/">Home</Nav.Link>
    <Nav.Link id="nav__item" href="/contact">Contact Us</Nav.Link>
    <Nav.Link id="nav__item" href="/singIn">Sing in</Nav.Link>
    <Nav.Link id="nav__item" href="/singUn">Sing up</Nav.Link>
    <Nav.Link id="nav__item" href="/singUnGoogle">Log in with google</Nav.Link>
    
      </Navbar.Collapse>
  </Navbar>
  <br />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Login);


