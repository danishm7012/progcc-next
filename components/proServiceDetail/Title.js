import { Row, Col } from 'react-bootstrap'
import Image from 'next/image'
const title = ({ img, altTag /* , height, width  */ }) => {
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
