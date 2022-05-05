import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className='navbar'>
  <Container>
  <Navbar.Brand as={Link} to='/' style={{fontSize:"23px"}}>Carventory</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav className='nav-items'>
      <CustomLink to='/'>Home</CustomLink>
      <CustomLink to='/manage'>Manage Items</CustomLink>
      <CustomLink to='/add'>Add Item</CustomLink>
      <CustomLink to='/blogs'>Blogs</CustomLink>
      <CustomLink eventkey={2} as={Link} to="/login">Login</CustomLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;