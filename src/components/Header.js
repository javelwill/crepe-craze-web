import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>CREPE CRAZE <i class='fas fa-pizza-slice'></i></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
            <Nav.Link href='/login'>DESIGN A CREPE</Nav.Link>
              <Nav.Link href='/login'>SIGN IN</Nav.Link>
              <Nav.Link href='/cart'><i class="fas fa-shopping-cart"></i> $0.00</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
