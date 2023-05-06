import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import "../shared/tour-card.css";

import Newsletter from "../shared/Newsletter";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/users/favorites/${user._id}`
  );
  const [toursList, setToursList] = useState(data);

  useEffect(() => {
    setToursList(data);
  }, [data]);

  return (
    <>
      <CommonSection title={"Your Favorite Tours"} />

      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <section>
              <Row className="justify-content-center">
                {toursList?.map((tour, index) => (
                  <Col lg="4" className="tour__card" key={index}>
                    <Card>
                      <div className="tour__img">
                        <img src={tour.photo} alt="tour-img" />
                        {tour.featured && <span>Featured</span>}
                      </div>
                      <CardBody>
                        <div className="card__top d-flex align-items-center justify-content-between ">
                          <span className="tour__location d-flex align-items-center gap-1">
                            <i className="ri-map-pin-line"></i> {tour.city}
                          </span>
                        </div>
                        <h5 className="tour__title">
                          <Link to={`/tours/${tour._id}`}>{tour.title}</Link>
                        </h5>
                        <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                          <h5>
                            ${tour.price}
                            <span> /per person</span>
                          </h5>
                          <button className="btn booking__btn">
                            <Link to={`/tours/${tour._id}`}>Đặt Ngay</Link>
                          </button>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </section>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Favorites;
