import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
return (
    <header>
    <Navbar bg="transparent" variant="light" sticky="top">
        <Container>
        <Nav className="me-auto">
            <Nav.Link className = "link link--kale" href="/">Arundhati Balasubramaniam</Nav.Link>
            </Nav>          
            <Nav className="ms-auto">
            <Nav.Link className = "link link--kale" href="/work">Work</Nav.Link>
            <Nav.Link className = "link link--kale" href="/about">Contact</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
     </header>
  )
}

export default Header