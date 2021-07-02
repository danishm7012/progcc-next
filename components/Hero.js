import Link from 'next/link'
import { Container, Col, Row, Button } from 'react-bootstrap'

const Hero = () => {
  return (
    <section id='hero' className=' d-flex align-items-center'>
      <div className='overlay'>
        <Container>
          <Row>
            <Col xl={6} lg={6}>
              <h1>
                PRO Services & All Banking Solutions One Window Operations
              </h1>
              <h2>Bettter PRO Services experience with ProGcc in UAE.</h2>
              <Link href='/contact'>
                <Button className='btn-get-started scrollto'>
                  Book An Appointment
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Hero
