import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Dự đoán thời tiết",
    desc: "Chúng tôi sẽ lựa chọn cho bạn những ngày có thời tiết đẹp nhất.",
  },
  {
    imgUrl: guideImg,
    title: "Hướng dẫn viên tốt nhất",
    desc: "Hướng dẫn viên của chúng tôi sẽ luôn vui vẻ và nhiệt tình hướng dẫn bạn.",
  },
  {
    imgUrl: customizationImg,
    title: "Dịch vụ khác",
    desc: "Ngoài ra, chúng tôi sẽ mang lại chuyến đi vừa hợp lý vừa tuyệt vời cho bạn.",
  },
];
const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
