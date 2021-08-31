import Link from 'next/link'
import HeaderStyle from '../styles/Header.module.css'

import {
  Nav,
  Navbar,
  Container,
  Image,
  Button,
  NavLink,
  Accordion,
} from 'react-bootstrap'
import { FaAngleDown } from 'react-icons/fa'
import TopCTA from './TopCTA'

const Header = () => {
  return (
    <>
      <TopCTA />
      <Navbar
        className={HeaderStyle.navbar}
        collapseOnSelect
        expand='lg'
        variant='light'
        sticky='top'
      >
        <Container fluid>
          <Navbar.Brand href='/'>
            <Image
              src='/images/logo.png'
              alt='Paradise Group of Companies'
              height='auto'
              width='170'
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto text-center nav'>
              <Nav.Link href='/' className={HeaderStyle.link}>
                HOME{' '}
              </Nav.Link>

              <Nav.Link href='/about' className={HeaderStyle.link}>
                {' '}
                ABOUT US{' '}
              </Nav.Link>

              <Nav.Link href='/pro-services' className={HeaderStyle.link}>
                {' '}
                PRO SERVICES{' '}
              </Nav.Link>

              <Nav.Link href='/banking-services' className={HeaderStyle.link}>
                {' '}
                BANKING & FINANCIAL
              </Nav.Link>

              <Nav.Link className={HeaderStyle.link}>
                <a>
                  <div className='mega-menu'>
                    BUSINESS SETUP IN UAE <FaAngleDown />
                    <div className='drop-menu'>
                      <ul>
                        <li className='drop-down'>
                          <Link href=''>
                            <a>Mainland Compnay Setup</a>
                          </Link>
                          <div className='drop-down-menu'>
                            <ul>
                              <li>
                                <Link href='/branch-office-setup-in-uae'>
                                  <a>Branch Office Setup in UAE</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/Branch Registration Of Foreign Company In Dubai'>
                                  <a>
                                    Branch Registration Of Foreign Company In
                                    Dubai
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/civil-company-formation-in-dubai'>
                                  <a>Civil Company Formation in Dubai</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/commercial-license-in-dubai'>
                                  <a>Commercial License in Dubai</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/industrial-license-in-dubai'>
                                  <a>Industrial License in Dubai</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/sole-establishment-proprietorship-company-formation-in-dubai'>
                                  <a>
                                    Sole Establishment/Proprietorship Company
                                    Formation in Dubai
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className='drop-down'>
                          <Link href=''>
                            <a>Free Zone Compnay Setup</a>
                          </Link>
                          <div className='drop-down-menu'>
                            <ul>
                              <li>
                                <Link href='/abu-dhabi-free-zone-company-setup'>
                                  <a>Abu Dhabi Free Zone Company Setup</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/ajman-free-zone-company-setup'>
                                  <a>Ajman Free Zone Company Setup</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/sharjah-free-zone-company-setup'>
                                  <a>Sharjah Free Zone Company Setup</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/dubai-free-zone-company-setup'>
                                  <a>Dubai Free Zone Company Setup</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/fujairah-free-zone-company-setup'>
                                  <a>Fujairah Free Zone Company Setup</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/rak-ras-al-khaimah-free-zone-company-setup'>
                                  <a>RAK Ras Al Khaimah Company Setup</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className='drop-down'>
                          <Link href=''>
                            <a>Off Shore Compnay Setup</a>
                          </Link>
                          <div className='drop-down-menu'>
                            <ul>
                              <li>
                                <Link href='/ajman-offshore-company-formation'>
                                  <a>Ajman Offshore Company Formation</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/jafza-offshore-company-formation'>
                                  <a>JAFZA Offshore Company Formation</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/llc-company-formation-in-dubai'>
                                  <a>LLC Company Formation in Dubai</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/professional-license-in-dubai'>
                                  <a>Professional License in Dubai</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/rak-offshore-company-formation'>
                                  <a>RAK Offshore Company Formation</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/subsidiary-company-setup-in-dubai'>
                                  <a>Subsidiary Company Setup in Dubai</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <div className="mobile-mega">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body></Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div> */}
                </a>
              </Nav.Link>
              <Nav.Link href='/testimonial' className={HeaderStyle.link}>
                {' '}
                TESTIMONIALS{' '}
              </Nav.Link>
              <Nav.Link href='/faqs' className={HeaderStyle.link}>
                {' '}
                FAQs{' '}
              </Nav.Link>

              <Nav.Link href='/careers' className={HeaderStyle.link}>
                {' '}
                CAREERS{' '}
              </Nav.Link>

              <Nav.Link href='/news' className={HeaderStyle.link}>
                {' '}
                WHAT'S NEW
              </Nav.Link>

              <NavLink
                style={{ color: 'white' }}
                href='/contact'
                className={HeaderStyle.contactBtn}
              >
                CONTACT US
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
