import Link from "next/link";
import HeaderStyle from "../styles/Header.module.css";

import {
  Nav,
  Navbar,
  Container,
  Image,
  Button,
  NavLink,
  Accordion,
} from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
import TopCTA from "./TopCTA";

const Header = () => {
  return (
    <>
      <TopCTA />
      <Navbar
        className={HeaderStyle.navbar}
        collapseOnSelect
        expand="lg"
        variant="light"
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <Image
              src="/images/logo.png"
              alt="Paradise Group of Companies"
              height="auto"
              width="170"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto text-center nav">
              <Nav.Link href="/" className={HeaderStyle.link}>
                HOME{" "}
              </Nav.Link>

              <Nav.Link href="/about" className={HeaderStyle.link}>
                {" "}
                ABOUT US{" "}
              </Nav.Link>

              <Nav.Link href="/pro-services" className={HeaderStyle.link}>
                {" "}
                PRO SERVICES{" "}
              </Nav.Link>

              <Nav.Link href="/banking-services" className={HeaderStyle.link}>
                {" "}
                BANKING & FINANCIAL
              </Nav.Link>

              <Nav.Link className={HeaderStyle.link}>
                <a>
                  <div className="mega-menu">
                    BUSINESS SETUP IN UAE <FaAngleDown />
                    <div className="drop-menu">
                      <ul>
                        <li className="drop-down">
                          <Link href="">
                            <a>Mainland Compnay Setup</a>
                          </Link>
                          <div className="drop-down-menu">
                            <ul>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="drop-down">
                          <Link href="">
                            <a>Free Zone Compnay Setup</a>
                          </Link>
                          <div className="drop-down-menu">
                            <ul>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="drop-down">
                          <Link href="">
                            <a>Off Shore Compnay Setup</a>
                          </Link>
                          <div className="drop-down-menu">
                            <ul>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <a>Limited Liabilties Company</a>
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
              <Nav.Link href="/testimonial" className={HeaderStyle.link}>
                {" "}
                TESTIMONIALS{" "}
              </Nav.Link>
              <Nav.Link href="/faqs" className={HeaderStyle.link}>
                {" "}
                FAQs{" "}
              </Nav.Link>

              <Nav.Link href="/careers" className={HeaderStyle.link}>
                {" "}
                CAREERS{" "}
              </Nav.Link>

              <Nav.Link href="/news" className={HeaderStyle.link}>
                {" "}
                WHAT'S NEW
              </Nav.Link>

              <NavLink
                style={{ color: "white" }}
                href="/contact"
                className={HeaderStyle.contactBtn}
              >
                CONTACT US
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
