import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import ava04 from "../../assets/images/ava-4.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidestoShow: 2,
          slidetoScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidestoShow: 1,
          slidestoScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          I had a trip to Vietnam, the people here are very enthusiastic and
          hospitable. The food is varied and appealing. The tour guide
          introduced me and my family to know more about the customs and
          festivals in Vietnam. I thank Ong Sang Tours for giving me this
          interesting trip.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Ms.White</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          I had a trip to Hanoi capital, Vietnam, the people here are very
          enthusiastic and hospitable. The food is varied and appealing. The
          weather here is very cool and suitable for walking. The tour guide
          introduced me and my friends to know more about the customs and
          festivals here.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Mr.John</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Tôi đã có chuyến đi 3 ngày 2 đêm đến London, Anh Quốc cùng với gia
          đình. Chuyến đi đã cho tôi những khoảnh khắc thật tuyệt bên gia đình.
          Hành trình của chúng tôi luôn có thời tiết rất thuật lợi, các địa điểm
          tham quan cũng được sắp xếp rất hợp lý. Cảm ơn Ong Sang Tours đã cho
          gia đình tôi chuyến đi tuyệt vời này.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Trần Văn A</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Tôi và bạn bè của mình đã có chuyến đi 2 ngày 1 đêm đến Thái Lan. Tuy
          chỉ có 2 ngày nhưng chúng tôi đã được tham quan rất nhiều địa điểm nổi
          tiếng tại Thái. Được thưởng thức các món ăn Thái cùng với việc lưu lại
          những khoảnh khắc tuyệt vời đó bên bạn bè. Cảm ơn Ong Sang Tours đã
          cho tôi chuyến đi đầy thú vị.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={ava04}
            className="w-25 rounded-2"
            alt=""
            style={{ height: "80px" }}
          />
          <div>
            <h6 className="mb-0 mt-3">Phạm Thị B</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
