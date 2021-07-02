import { Image, Row, Col } from 'react-bootstrap'
const title = ({ img, altTag }) => {
  return (
    <Row>
      <Col>
        <Image
          className='service-title'
          src={img}
          alt={altTag}
          height='auto'
          width='100%'
        />
      </Col>
    </Row>
  )
}

export default title
