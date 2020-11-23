import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="static-bottom py-3">
      <Container>
        <Row>
          <Col className='text-center'>Crepe Craze &copy; 2020</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
