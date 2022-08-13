import { Form, Button, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Import the FontAwesomeIcon component
import {
  faPhone,
  faEnvelope,
  faLocationArrow,
} from '@fortawesome/free-solid-svg-icons' // import the icons you needz
function contactUs() {
  return (
    <>
      <section id='contact' className='contact section'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <h2>Contact</h2>
            <iframe
              title='PROGcc office'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5269363452203!2d55.25959091434539!3d25.185446483901682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d0ffbfffff%3A0x561a6d9c9da2b17d!2sPARK%20LANE%20TOWER!5e0!3m2!1sen!2s!4v1618552117335!5m2!1sen!2s'
              width='100%'
              height='100'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>

          <div className='row' data-aos='fade-up' data-aos-delay='100'>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='info-box'>
                    <FontAwesomeIcon
                      className='icons'
                      icon={faLocationArrow}
                    ></FontAwesomeIcon>
                    <h3>Our Address</h3>
                    <p>
                      <span>UAE Office:</span> Office No. 704, Damas Tower,
                      Rigga Al Buteen, Deira, Dubai, UAE
                      <br />
                      <span>UK Office:</span> 3rd Floor, 244 Edgware Road,
                      London W2 1DS, UK.
                      <br />
                      <span>PAK Office:</span> 2nd Floor, Plaza no 83 Phase 1
                      Block - H, DHA Lahore
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='info-box mt-4'>
                    <FontAwesomeIcon
                      className='icons'
                      icon={faEnvelope}
                    ></FontAwesomeIcon>
                    <h3>Email Us</h3>
                    <p>
                      info@progcc.org
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='info-box mt-4'>
                    <FontAwesomeIcon
                      className='icons'
                      icon={faPhone}
                    ></FontAwesomeIcon>
                    <h3>Call Us</h3>
                    <p>
                      <span>UAE:</span> +971 4589 1233
                      <br />
                      +971 581-439-463
                      <br />
                      +971 5430 19 663 <br />
                      <span>UK:</span> +44 7391 758 721
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <Form className='php-email-form'>
                <h2 className='py-1'>GET IN TOUCH WITH US.</h2>
                <Form.Row>
                  <Form.Group as={Col} controlId='formGridName'>
                    <Form.Control
                      type='text'
                      className='form-control'
                      placeholder='Your Name'
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formGridEmail'>
                    <Form.Control
                      type='email'
                      className='form-control'
                      placeholder='Your Email'
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId='formGridAddress1'>
                  <Form.Control
                    className='form-control'
                    placeholder='Subject'
                  />
                </Form.Group>

                <Form.Group controlId='formTextarea'>
                  <Form.Control
                    as='textarea'
                    className='form-control'
                    placeholder='Your Message'
                    rows={6}
                  />
                </Form.Group>
                <div className='text-center'>
                  <Button className='contact-btn' type='submit'>
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default contactUs
