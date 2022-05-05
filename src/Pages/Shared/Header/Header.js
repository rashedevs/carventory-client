import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/' style={{fontSize:"23px"}}>Carventory</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav className='nav-items'>
      <Nav.Link to='/'>Home</Nav.Link>
      <Nav.Link to='/manage'>Manage Items</Nav.Link>
      <Nav.Link to='/add'>Add Item</Nav.Link>
      <Nav.Link to='/blogs'>Blogs</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;