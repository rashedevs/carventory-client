import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
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
      <CustomLink to="/manageitems">Manage items</CustomLink>
      <CustomLink to="/additem">Add item</CustomLink>
      <CustomLink to="/myitems">My items</CustomLink>
      <CustomLink to="/blogs">Blogs</CustomLink>
      <CustomLink to="/login">Login</CustomLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;