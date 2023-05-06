import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";

import experienceImg from "../assets/images/experience.png";
import logo from "../assets/images/logo1.png";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const About = () => {
  return (
    <>
      <section style={{ marginTop: "100px" }}>
        <Container>
          <Row>
            <Col lg="6">
              <h2 className="partner__subtitle">
                Partner with Southeast Asia’s Leading Travel Platform
              </h2>
              <p>
                With more than 50 million monthly active users in Asia-Pacific
                and beyond, Traveloka is here to support the growth of your
                business.
              </p>
              <h6>
                Choose the partnership that best suit your needs from the
                various options below.
              </h6>
            </Col>
            <Col lg="6">
              <div className="logo__img">
                <img src={logo} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Với những kinh nghiệm có được trong suốt những năm vừa qua.
                  <br />
                  Chúng tôi hứa hẹn sẽ cho bạn một kỳ nghỉ thật nhiều cảm xúc và
                  thú vị.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>9k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>3k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>10+</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
