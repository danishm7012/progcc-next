import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const FServices = ({ services }) => {
  return (
    <div id='services' className='section'>
      <Container>
        <div className='section-title'>
          <h2 className='py-3 text-center pro-h1'>PRO Services in UAE</h2>
          <p>
            When it comes to delivering PRO Services in UAE, our team of
            Professionals handhold you throughout your desired services from the
            beginning to the end. Our consultants here in Dubai offer PRO
            services to our valuable clients by liaising with the concerned
            Government Authorities.
          </p>
        </div>

        <Row>
          {
            /* .filter((s) => s.category === 'PRO') */
            services.map((service) => (
              <Col lg={4} md={4} sm={12} xs={12} key={service.slug}>
                <Link href={`/${service.slug}`}>
                  <div className='f-services'>
                    {service.icon && (
                      <img
                        className='service-icon'
                        src={service.icon.url}
                        alt={service.alternativeText}
                      />
                    )}
                    <p>{service.title}</p>
                  </div>
                </Link>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default FServices
