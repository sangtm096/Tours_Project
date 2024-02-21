import React from "react";
import "./newsletter.css";

import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              {/* <h2>Subcribe now to get useful traveling information.</h2> */}
              <h2>
                Đăng ký ngay để nhận được những thông tin du lịch hữu ích.
              </h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>

              <p>
                Để lại thông tin để chúng tôi mang đến cho bạn những tours tuyệt
                vời.
                <br />
                Bạn sẽ nhận được các tours hấp dẫn và thú vị nhất!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
