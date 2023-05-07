import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Du lịch bốn phương để tạo ra những khoảnh khắc tuyệt vời cùng
                  với
                  <span className="highlight"> Ong Sang Tours</span>
                </h1>
                <p>
                  Ong Sang Tours sẽ mang bạn đến những nơi bạn muốn đến, cùng
                  bạn tạo ra những khoảnh khắc thật dặc biệt cùng bạn bè, gia
                  đình và những người thân yêu của bạn. Với đầy đủ các loại
                  tours cùng với mức giá vô cùng hấp dẫn hứa hẹn sẽ đem đến cho
                  bạn một kỳ nghỉ tuyệt vời.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* --------------featured tour section start ----------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">
                Tours nổi bật của chúng tôi
              </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* --------------featured tour section end ----------- */}

      {/* -------------hero section start------------ */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* --------------experience section start----------- */}
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
      {/* --------------experience section end----------- */}

      {/* -------------- testimontial section start ----------- */}
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
      {/* -------------- testimontial section end ----------- */}
      <Newsletter />
    </>
  );
};

export default Home;
