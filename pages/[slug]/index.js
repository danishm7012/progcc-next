import { Container, Jumbotron, Row, Col, Button } from 'react-bootstrap'
import Title from '../../components/proServiceDetail/Title'
import SectionH1 from '../../components/proServiceDetail/sectionH1'
import List from '../../components/proServiceDetail/List'
import Section from '../../components/proServiceDetail/section'
import Meta from '../../components/Meta'
import Link from 'next/link'
import { server } from '../../config/index'

const index = ({ Service }) => {
  return (
    <>
      <Title
        img={Service.banner}
        altTag={Service.metaTitle} /* altTag={altTag}  */
      />
      <div className=' section proService-detail'>
        <Meta
          title={Service.metaTitle}
          description={Service.metaDesc}
          keywords={Service.metaKeyword}
        />

        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <Link
                  href={
                    Service.category === 'PRO'
                      ? '/pro-services'
                      : '/banking-services'
                  }
                >
                  <Button
                    variant='outline-dark'
                    size='sm'
                    style={{ fontSize: 14, float: 'left', marginTop: '0.7rem' }}
                  >
                    <i class='fas fa-caret-left'></i> Back
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <SectionH1 title={Service.name} detail={Service.detail} />
              </Col>
            </Row>
            <Row>
              <Col>
                <List heading={Service.listH} paragraph={Service.listP}></List>
                <div className='detail-list'>
                  {Service.list &&
                    Service.list.map((item) => <li key={item}>{item}</li>)}
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <Section heading={Service.thirdH} paragraph={Service.thirdP} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Section heading={Service.forthH} paragraph={Service.forthP} />
              </Col>
            </Row>
            {Service.listH2 && (
              <Row>
                <Col>
                  <List
                    heading={Service.listH2}
                    paragraph={Service.listP2}
                  ></List>
                  <div className='detail-list'>
                    {Service.list2 &&
                      Service.list2.map((item) => <li key={item}>{item}</li>)}
                  </div>
                </Col>
              </Row>
            )}
            <Row>
              <Col>
                <orderList
                  heading={Service.listH2}
                  paragraph={Service.listP2}
                  list={Service.list2}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Section heading={Service.fifthH} paragraph={Service.fifthP} />{' '}
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/services/${context.params.slug}`)

  const Service = await res.json()

  return {
    props: {
      Service,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/services`)

  const services = await res.json()

  const slugs = services.map((service) => service.slug)
  const paths = slugs.map((slug) => ({ params: { slug: slug.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default index
