import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";

import experienceImg from "../assets/images/experience.png";
import logo from "../assets/images/logo1.png";
import logo_parner from "../assets/images/logo-doitac.jpg";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const About = () => {
  return (
    <>
      <section style={{ marginTop: "100px" }}>
        <Container>
          <Row>
            <Col lg="6">
              <h3 className="partner__subtitle">
                {/* Partner with Southeast Asia’s Leading Travel Platform */}
                Đối tác của nhiều nền tảng du lịch hàng đầu Đông Nam Á
              </h3>
              <h4>
                Ngoài ra, đối tác của chúng tôi còn là các công ty lữ hành/khách
                sạn/vận tải du lịch/..
              </h4>
              <p>
                {/* With more than 50 million monthly active users in Asia-Pacific
                and beyond, Traveloka is here to support the growth of your
                business. */}
                → Tổ chức các chương trình du lịch hàng ngày, hàng tuần không
                phụ thuộc vào số lượng khách các tuyến điểm trong: Hạ Long,
                Sapa, Huế, Đà Nẵng, Đà Lạt, Thái Lan, Hawai, các quốc gia châu
                Âu…
              </p>
              <p>
                → Tổ chức các chương trình du lịch khách đoàn với số lượng khách
                lớn kết hợp cùng các hoạt động kỷ niệm thành lập công ty, giao
                lưu vui nhộn, trò chơi, teambuilding, trại hè, ngoại khoá trên
                biển hoặc trong trung tâm sự kiện lớn…
              </p>
              <p>
                → Các chương trình du lịch nước ngoài tìm hiểu văn hóa kết hợp
                tìm kiếm thị trường, đối tác, xúc tiến thương mại.
              </p>
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
              <h3>Chương trình đối tác liên kết</h3>
              <p>
                <i>“Liên kết cùng Đi Vui”</i> là chương trình hợp tác được thiết
                kế nhằm mục đích khuyến khích khách hàng tiếp cận với dịch vụ
                của{" "}
                <i>
                  <b>Ong Sang Tours</b>
                </i>
                , đồng thời gia tăng thêm thu nhập dành cho Đối tác liên kết.
              </p>
              <p>
                Đối với mỗi đơn hàng đặt thành công do Đối tác liên kết giới
                thiệu, Ong Sang Tours xin chia sẻ một phần doanh thu của mình
                với Đối tác, phần hoa hồng này sẽ được tính theo % trên tổng giá
                trị mỗi sản phẩm trong đơn hàng khách hàng đã thanh toán.
              </p>
              <p>
                Bạn nên tham gia{" "}
                <i>
                  “Liên kết cùng <b>Ong Sang Tours</b>”
                </i>{" "}
                ngay nếu bạn có: Blog/Website/Fanpage/Youtube Channel cá nhân
                được nhiều người theo dõi. Yêu thích du lịch, thích chia sẻ cảm
                nhận, kinh nghiệm qua bài viết, hình ảnh, video, ... Muốn tạo
                nguồn thu nhập thụ động hiệu quả & bền vững qua chính những bài
                viết của mình.
              </p>
            </Col>
            <Col lg="6">
              <div className="logo__parner">
                <img src={logo_parner} alt="" />
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
                  Với tất cả kinh nghiệm <br /> Chúng tôi sẽ mang đến cho bạn
                  những chuyến đi hoàn hảo.
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
                  <h6>Chuyến đi thành công</h6>
                </div>
                <div className="counter__box">
                  <span>3k+</span>
                  <h6>Khách hàng thân thiết</h6>
                </div>
                <div className="counter__box">
                  <span>10+</span>
                  <h6>Năm kinh nghiệm</h6>
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
              <h2 className="testimonial__title">
                Cảm nhận khách hàng về chúng tôi
              </h2>
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
