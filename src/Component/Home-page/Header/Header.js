import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"


const Header = () => {
    return (
        
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "#1C2833"}} >
        <Container>
        <Navbar.Brand href="#" className="fs-1">Md <span className="header-name">Fuwad Hossian</span> </Navbar.Brand>
        
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            {/* <div>
            <div>
            <h5 className="text-white">Md <span>Fuwad Hossian</span></h5>
            <small className="text-white ">Web Developer</small>
            </div>
            </div> */}
          <Link className="mx-2 fs-5 header-link" to="/home">Home</Link>
          <Link className="mx-2 fs-5 header-link" to="/projects">Projects</Link>
          <Link className="mx-2 fs-5 header-link" to="/about">About</Link>
          <Link className="mx-2 fs-5 header-link" to="/contact">Contact Me</Link>
          <Link className="mx-2 fs-5 header-link" to="/blogs">Blogs</Link>
          <Link className="mx-2 fs-5 header-link" to="/skills">Skills</Link>
          
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;