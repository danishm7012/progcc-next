import { Container, Jumbotron, Row, Col, Button } from 'react-bootstrap'
/* import React, { useState, useEffect } from 'react' */
/* import Image from 'next/image' */
import SectionH1 from '../../components/proServiceDetail/sectionH1'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Import the FontAwesomeIcon component
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons' // import the icons you needz
/* import List from '../../components/proServiceDetail/List'
import Section from '../../components/proServiceDetail/section'
import ProServices from '../../companiesData/fServices' */
import Meta from '../../components/Meta'
import Link from 'next/link'
import MarkdownIt from 'markdown-it'
/* import { useRouter } from 'next/router'
import Services from '../../companiesData/fServices' */

const md = new MarkdownIt()

const index = ({ Service }) => {
  /* const router = useRouter()
  const { slug } = router.query
  const [Service, setService] = useState({})

  useEffect(() => {
    setService(ProServices.find((s) => s.slug === slug))
  }, [slug]) */

  return (
    <>
      {/* <Row>
        <Col>
          <Image
            src={Service.image.url}
            alt={Service.image.alternativeText}
            height='auto'
            width='100%'
            className='service-title'
          />
        </Col>
      </Row> */}
      <div className=' section proService-detail'>
        <Meta
          title={Service.metaTitle}
          description={Service.metaDescription}
          keywords={Service.metaKeyword}
        />

        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <Link
                  href={
                    Service.category._id === '60f1612b7806eca740ece88d'
                      ? '/pro-services'
                      : '/banking-services'
                  }
                >
                  <Button
                    variant='outline-dark'
                    size='sm'
                    style={{ fontSize: 14, float: 'left', marginTop: '0.7rem' }}
                  >
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className='icons'
                    ></FontAwesomeIcon>{' '}
                    Back
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <SectionH1 title={Service.title} />
              </Col>
            </Row>
            <Row>
              <div
                className='service-content container'
                dangerouslySetInnerHTML={{ __html: md.render(Service.details) }}
              ></div>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://cms-progcc.herokuapp.com/services/${context.params.slug}`
  )

  const Service = await res.json()

  return {
    props: {
      Service,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://cms-progcc.herokuapp.com/services/`)

  const services = await res.json()

  const slugs = services.map((service) => service.slug)
  const paths = slugs.map((slug) => ({ params: { slug: slug.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default index
