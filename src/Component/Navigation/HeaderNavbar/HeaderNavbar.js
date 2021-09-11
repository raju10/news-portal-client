import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImg from "../../../Image/logo/herald_logo.png";
import "./HeaderNavbar.css";
const HeaderNavbar = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        style={{
          background: "#da463a",
          color: "white",
        }}
      >
        <Container className="nav_container">
          <Navbar.Brand href="/home">
            <img src={logoImg} alt="" className="header_logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav_list">
              <Nav.Link className="navbar_link_styles1">
                {" "}
                <Link to="/home" className="navbar_link_stylee">
                  <button>Home</button>
                </Link>
              </Nav.Link>
              <Nav.Link className="navbar_link_styles1">
                {" "}
                <Link to="/admain" className="navbar_link_stylee">
                  <button>Admain</button>
                </Link>
              </Nav.Link>
              <Nav.Link className="navbar_link_styles1">
                {" "}
                <Link to="/login" className="navbar_link_stylee">
                  <button>Login</button>
                </Link>
              </Nav.Link>
              <NavDropdown
                className="navbar_link_styless"
                title="All Catagory"
                // id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  {" "}
                  <Link to="/all-news/news">Top News </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  {" "}
                  <Link to="/all-news/sports">Sports </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <Link to="/all-news/health">Health </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav style={{ float: "right", marginLeft: "5%" }}>
                <Nav.Link
                  className=""
                  href="https://www.facebook.com/arifulislam.raju.543/"
                >
                  <FaFacebook />
                </Nav.Link>
                <Nav.Link className="" href="https://github.com/raju10">
                  <FaGithub />
                </Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavbar;
