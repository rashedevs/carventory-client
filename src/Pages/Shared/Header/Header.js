import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
import "./Header.css";
import warehouse from "../../../images/warehouse.png.ico";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="danger"
      variant="dark"
      className="navbar"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ mouse: "pointer", fontSize: "23px" }}
        >
          <span className="mx-2">
            <img style={{ width: "30px" }} src={warehouse} alt="" />
          </span>
          Carventory
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="nav-items">
            <CustomLink to="/">Home</CustomLink>

            {user && (
              <>
                <CustomLink to="/manageitems">Manage items</CustomLink>
                <CustomLink to="/additem">Add item</CustomLink>
                <CustomLink to="/myitems">My items</CustomLink>
              </>
            )}
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            {user ? (
              <button
                className="logout btn btn-link text-white text-decoration-none"
                onClick={() => signOut(auth)}
              >
                Sign Out
              </button>
            ) : (
              <CustomLink to="/login">Login</CustomLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
