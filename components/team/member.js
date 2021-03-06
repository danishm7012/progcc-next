import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Import the FontAwesomeIcon component

import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons' // import the icons you needz
const member = ({
  name,
  image,
  designation,
  facebook,
  instagram,
  twitter,
  linkedIn,
}) => {
  return (
    <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
      <div className='member' data-aos='fade-up' data-aos-delay='100'>
        <div className='member-img'>
          <img src={image} className='img-fluid' alt={name} />
          <div className='social'>
            <a href={twitter}>
              <FontAwesomeIcon
                className='icons'
                icon={faTwitter}
              ></FontAwesomeIcon>
            </a>
            <a href={facebook}>
              <FontAwesomeIcon
                className='icons'
                icon={faFacebook}
              ></FontAwesomeIcon>
            </a>
            <a href={instagram}>
              <FontAwesomeIcon
                className='icons'
                icon={faInstagram}
              ></FontAwesomeIcon>
            </a>
            <a href={linkedIn}>
              <FontAwesomeIcon
                className='icons'
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className='member-info'>
          <h4>{name}</h4>
          <span>{designation}</span>
        </div>
      </div>
    </div>
  )
}

export default member
