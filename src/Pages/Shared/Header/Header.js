import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <Navbar bg="" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src={logo} height="40" alt="" srcset="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Checkout</Nav.Link>
        <Nav.Link href="#link">Service</Nav.Link>
        <Nav.Link href="#link">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;