import { Container, Image, Col, Row } from 'react-bootstrap'
import Count from './Count'

function About() {
  return (
    <>
      <section id='about' className='about section'>
        <div className='section-title container'>
          <h2>About Us</h2>
          <p>
            You can get started with your business in UAE, especially in Travel,
            Real Estate, Information & Technology, Legal Affairs, Finance,
            Banking, and Human Resources. Many companies are digitizing their
            operations to improve their performance. ProGcc is the way to go to
            set up your desired business in the UAE.
          </p>
        </div>
        <Image src='/images/Banners/about.jpg' height='auto' width='100%' />
        <Container>
          <Row>
            <Col>
              <h3>Mission</h3>
              <p>
                To present the information and technology that meets the
                financial needs of the Private, Commercial, and Banking sectors
                in the best way to increase the operational efficiency of the
                institutions.
              </p>
              <h3>Vision</h3>
              <p>
                To be of UAE's growing value and becoming the world's leading
                credit bureau by exceeding expectations with the innovative
                products and services we have created.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Count />
    </>
  )
}

export default About
