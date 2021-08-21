import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TestimonialCard from './testimonialCard'
import { TestimonialData } from '../../companiesData/TestimonialData'

const TestimonialPage = () => {
  return (
    <div className='testimonial-page py-5' style={{ background: '#f1f1f1' }}>
      <Container>
        <div className='section-title'>
          <h2>What Client Says</h2>
          <p>Some Impressions from our Customers !</p>
        </div>

        <br />
        <br />
        <Row>
          {TestimonialData.map((Data) => {
            return (
              <Col md={4} sm={6} xs={12} className='mt-5'>
                <TestimonialCard
                  img={Data.img}
                  details={Data.details}
                  Name={Data.Name}
                  desig={Data.desig}
                  company={Data.company}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default TestimonialPage
