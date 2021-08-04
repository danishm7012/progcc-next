import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Link from 'next/link'

const BankingServices = ({ services }) => {
  return (
    <div id='bankingServices' className='section banking-h1'>
      <Row>
        <Col>
          <div className='section-title container'>
            <h2>Banking and finanace services</h2>
            <p>
              PRO GCC,{' '}
              <Link href='/banking-services'>
                Banking and finance services in Dubai
              </Link>
              , UAE providing licensed financial system that operate to receive
              BANK deposits, grant credits, and provide many other banking
              services. Our banking financial services are known as business
              transactions and services provided by Dubai banks to organizations
              and individuals. Our services also include bank investment and
              banking services offered to businesses, including loans, credit,
              profits, stock trading, leveraged finance, financial instrument,
              and monitoring bank accounts. Our Banking service is safe, and it
              can be defined as allowing a loan or investment for business
              financial deposits by individuals and businessmen.
            </p>
          </div>
        </Col>
      </Row>
      <Container>
        <Row>
          {
            /* .filter((service) => service.category === 'Banking') */
            services.map((s) => (
              <Col key={s} lg={4}>
                <Link href={`${s.slug}`}>
                  <Card className='banking-servcie'>
                    <Card.Title>
                      {s.icon && (
                        <img
                          className='banking-icon'
                          src={s.icon.url}
                          alt={s.alternativeText}
                        />
                      )}
                      {s.title}
                    </Card.Title>
                  </Card>
                </Link>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default BankingServices
