import Link from 'next/link'
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

const Footer = () => {
  const submitHandler = (event) => {
    event.preventDefault()
    alert('Thank You for Subscribing us!')
  }
  return (
    <footer
      id='footer'
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      data-aos-duration='500'
    >
      <div className='footer-newsletter'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h4>Our Newsletter</h4>
              <p>
                Enter your email ID to get the latest news and feature stories
                on our businesses, community initiatives, heritage and people.
              </p>
            </div>
            <div className='col-lg-6'>
              <form onSubmit={submitHandler}>
                <input type='email' name='email' />
                <input type='submit' value='Subscribe' />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 footer-links'>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='icons'
                  ></FontAwesomeIcon>{' '}
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='icons'
                  ></FontAwesomeIcon>{' '}
                  <Link href='/about'>About us</Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='icons'
                  ></FontAwesomeIcon>{' '}
                  <Link href='/faqs'>FAQs</Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='icons'
                  ></FontAwesomeIcon>{' '}
                  <Link href='/term-and-conditions'>Terms and Conditions</Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='icons'
                  ></FontAwesomeIcon>{' '}
                  <Link href='/privacy-policy'>Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-6 footer-links'>
              <h4>Our Services</h4>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='icons'
                  ></FontAwesomeIcon>{' '}
                  <a href='/pro-services'>PRO Service</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='icons'
                  ></FontAwesomeIcon>{' '}
                  <a href='/banking-services'>Banking services</a>
                </li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-6 footer-contact'>
              <h4>Contact Us</h4>
              <p>
                P.O. BOX 415253, Dubai, UAE Business Bay, Park Lane Plaza, 12th
                Floor, Office No. 1213
                <br />
                <br />
                <strong>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{' '}
                  <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                </strong>
                {'   '}
                +971 5452 77366
                <br />
                <strong>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{' '}
                  <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                </strong>
                {'   '}
                +971 054 775 7091
                <br />
                <strong>Landline:</strong> +971 4 5891171
                <br />
                <strong>Email:</strong> info@progcc.org
                <br />
              </p>
            </div>

            <div className='col-lg-3 col-md-6 footer-info'>
              <h3>About PROGcc</h3>
              <p>
                Our Business Setup Guides give you the answers to the most
                commonly asked questions that we are being asked on setting up
                businesses in the UAE.
              </p>
              <div className='social-links mt-3'>
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
            </div>
          </div>
        </div>
      </div>
      <div className='pt-4 text-white text-center'>
        Copyright &copy; {new Date().getFullYear()}
        <strong>
          <span className='credits'> ProGcc. </span>
        </strong>
        All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
