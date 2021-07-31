import { Row, Col, Container, Image } from 'react-bootstrap'
const WhyUs = () => {
  return (
    <div className='section'>
      <Container>
        <div className='section-title'>
          <h2 className='py-3 text-center pro-h1'>
            Why Are We Important To You?
          </h2>
          <p>
            Whether you are planning a new business setup in Dubai or wondering
            where and how to start, you have come to the right place.
          </p>
        </div>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <p>
              ProGCC is a one-stop solution assisting you in establishing &
              maintaining your business in the UAE. We facilitate all of the
              paperwork and legal document processing related to Business and
              Enterprise. In addition, through our many partnerships and
              connections with government entities, we provide several PRO
              services that will allow you to operate your business efficiently,
              quickly, and cost-effectively without any obstacles or
              distractions.
              <br />
              <br />
              ProGcc is one of the top experienced business setup consultants in
              Dubai, UAE. We will assist you in all kinds of business setups in
              Dubai, UAE, as per your needs. We aim to be the leading PRO and
              business setup services provider in the UAE and all the GCC areas.
              Our office simplifies the path for those establishing or
              maintaining a business. Our services are primarily related to
              licensing, visa, or others, with top quality management and
              cost-effectiveness. We aim to build a long-term relationship with
              our customers by meeting and exceeding their expectations.
              <br />
              <br />
              Suppose you are looking for a business formation in UAE. In that
              case, certain things need to be taken care of and fulfilled under
              the UAE laws, like taking care of the sensitive documents to get
              the correct license, finalize all incorporation paperwork and visa
              processing, etc. Unless and until you have a professional
              consultant, things might get tricky and complicated to set up your
              dream business. That’s where ProGcc serves your needs, having
              hands-on experience in processing hassle-free setup of the
              company.
              <br />
            </p>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Image
              src='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt='why we us'
              height='auto'
              width='100%'
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              We will guide you through every phase and step involved in
              developing business formation in the UAE mainland or free zone.
              With our expert team of legal advisories, we will help you choose
              the suitable business activity, taking you through hassle-free
              processing of paperwork and business licensing and legal
              formalities to open your corporate bank account. The process is
              simple. We will take care of all the meetings and associations
              where you no longer have to knock on each government authority to
              get your business running.
              <br />
              You can get started with your business in UAE, especially in
              Travel, Real Estate, Information Technology, Legal Affairs,
              Finance, Banking, and Human Resources. ProGcc is the way to go to
              set up your desired business in the UAE.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhyUs
