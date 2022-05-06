import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth)
    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="danger" variant="dark" className='navbar'>
  <Container>
  <Navbar.Brand as={Link} to="/" style={{fontSize:"23px"}}>Carventory</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav className='nav-items'>
      <CustomLink to="/">Home</CustomLink>
      
      {
        user && <>
        <CustomLink to="/manageitems">Manage items</CustomLink>
        <CustomLink to="/additem">Add item</CustomLink>
        <CustomLink to="/myitems">My items</CustomLink>
        </>
      }
      <CustomLink to="/blogs">Blogs</CustomLink>
      {
        user ? <button className='logout btn btn-link text-white text-decoration-none' onClick={() => signOut(auth)}>Sign Out</button> : <CustomLink to="/login">Login</CustomLink>
      }
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;