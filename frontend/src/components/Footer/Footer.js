import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo2.png";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          {/* Column 1 */}
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Mang đến những trãi nghiệm tuyệt vời của quý khách là niềm vinh
                hạnh của chúng tôi.
              </p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          {/* Column 2 */}
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>

            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Column 3 */}
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Column 4 */}
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-fill"></i>
                  </span>
                  Address:
                </h6>

                <p className="mb-0">Can Tho, Viet Nam</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-fill"></i>
                  </span>
                  Email:
                </h6>

                <p className="mb-0">ongsangtours@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-smartphone-fill"></i>
                  </span>
                  Phone:
                </h6>

                <p className="mb-0">0344574465</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year}, Du lịch bốn phương cùng với Ong Sang Tours
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
