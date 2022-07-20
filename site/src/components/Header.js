import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { HashLink as Link } from 'react-router-hash-link';


const Header = () => {
return (
    <header>
    <Navbar bg="transparent" variant="light" sticky="top">
        <Container>
        <Nav className="me-auto">
          <Link to = "/" className = "link link--kale">arundhati balasubramaniam</Link>
            </Nav>          
            <Nav className="ms-auto">
            <Link to = "/#resume" className = "link link--kale">resume</Link>
            <Link to = "/#work" className = "link link--kale">work</Link>
            <Link to = "/#contact" className = "link link--kale">contact</Link>
            </Nav>
        </Container>
      </Navbar>
     </header>
  )
}

export default Header