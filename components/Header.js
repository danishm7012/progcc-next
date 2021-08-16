import Link from 'next/link'
import HeaderStyle from '../styles/Header.module.css'
import { Nav, Navbar, Container, Image, Button, NavLink } from 'react-bootstrap'
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
        <Container>
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

              <Nav.Link href='/team' className={HeaderStyle.link}>
                {' '}
                TEAM{' '}
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
