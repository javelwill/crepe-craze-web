import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'

const Home = () => {
  return (
    <main class='mt-3'>
      <Container>
        <Row>
          <Col sm='12' md='12' lg='6' xl='6'>
            <h1>Where crepe hunger meets crepe creativity</h1>
          </Col>
          <Col sm='12' md='12' lg='6' xl='6'></Col>
        </Row>
        <Row>
          <Col sm='12' md='12' lg='6' xl='6' className='order-lg-2'>
            <Image
              src='/images/paolo-cifuentes-crepe.jpg'
              fluid
              rounded
              alt='crepe'
            ></Image>
          </Col>
          <Col sm='12' md='12' lg='6' xl='6' className='order-lg-1'>
            <div>
              <p>
                We love crepes. All kinds of crepes. And we love being creative
                with the way we make our crepes
              </p>
              <p>
                Some crepe joints offer a set, set finite menu of crepes to
                choose from. At Crepe Craze, we want to share the joy of crepe
                creativity with you, allowing you to design your own crepes from
                a palette of fresh and delicious ingredients. While we may offer
                some our creations for you to try, the real fun is when you
                create your own works of art.
              </p>
              <p>
                And, even though we love crepes and creativity, we prefer to
                avoid doing complex math. That's why all crepes are priced
                modestly at $4.99 each, no matter how many or what ingredients
                you choose.
              </p>
              <p>Click here to get started on your crepe masterpiece</p>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Home
