import { Row, Container, Col } from 'react-bootstrap'
import TopStyle from '../styles/TopCTA.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Import the FontAwesomeIcon component
import { faPhone, faChevronRight } from '@fortawesome/free-solid-svg-icons' // import the icons you needz
import {
  faWhatsapp,
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterestP,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons' // import the icons you needz

function TopCTA() {
  return (
    <div className={TopStyle.topBar}>
      <Container>
        <Row>
          <Col>
            <p>
              <a href='tel:+971545277366' className={TopStyle.topLink}>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +971 54
                5277366{' '}
              </a>
              <a
                href='https://api.whatsapp.com/send?phone=+971581439463'
                className={TopStyle.topLink}
              >
                <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon> +971 58
                1439463
              </a>
            </p>
          </Col>
          <Col>
            <div className={TopStyle.topSocailLink}>
              <a
                href='https://twitter.com/ProGCC2'
                target='blank'
                className='twitter'
              >
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </a>
              <a
                href='https://www.facebook.com/PRO-GCC-107895398113832'
                target='blank'
                className='facebook'
              >
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </a>
              <a
                href='https://www.instagram.com/progcc1/'
                target='blank'
                className='instagram'
              >
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </a>
              <a
                href='https://www.linkedin.com/company/73792623'
                target='blank'
                className='linkedin'
              >
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
              <a
                href='https://www.pinterest.com/progccofficial/'
                target='blank'
                className='pinterest'
              >
                <FontAwesomeIcon icon={faPinterestP}></FontAwesomeIcon>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TopCTA
