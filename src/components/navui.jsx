import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavUI() {
    return (
      <Navbar style={{backgroundColor:'#ff007f'}} expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="/"><h1 style={{color:'#fff'}}>Dragon Fitness</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{color:'#fff'}} href="/"><h3>Home</h3></Nav.Link>
              <Nav.Link style={{color:'#fff'}} href="lifestyle"><h3>Gallery</h3></Nav.Link>
              <Nav.Link style={{color:'#fff'}} href="about"><h3>About</h3></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavUI;