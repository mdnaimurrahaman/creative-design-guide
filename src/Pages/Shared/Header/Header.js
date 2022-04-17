import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="white" expand="lg" sticky='top'>
  <Container>
    <Navbar.Brand as={Link} to="/"><img src={logo} height="40" alt="" srcset="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
        <Nav.Link as={Link} to="/services">Services</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;