import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () =>{
      signOut(auth)
    }

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
        {
          user?
          <button className='btn btl-link fw-bold text-decoration-none' onClick={handleSignOut}>SignOut</button>
          :
          <Nav.Link className='fw-bold' as={Link} to="/login">Login</Nav.Link>
        }
        <Nav.Link>{user?.email}</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;