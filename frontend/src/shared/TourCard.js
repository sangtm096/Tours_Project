import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import { useContext, useState } from "react";

import "./tour-card.css";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

const TourCard = ({ tour }) => {
  const { _id, title, photo, price, featured, city, reviews } = tour;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isFavorited, setIsFavorited] = useState(() => {
    return user && user.favorites.includes(_id);
  });

  const addToFavorite = async (tour) => {
    try {
      if (!user || user === undefined || user === null) {
        return navigate("/login");
      }
      const res = await fetch(`${BASE_URL}/users/favorite/${user._id}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(tour),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      } else {
        setIsFavorited(!isFavorited);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between ">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i>{" "}
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Chưa đánh giá"
              ) : (
                <span> ({reviews.length}) </span>
              )}
            </span>
          </div>

          <h5 className="tour__title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price}
              <span> /1 người</span>
            </h5>
            <button
              className="favorite_btn"
              onClick={() => addToFavorite(tour)}
            >
              {isFavorited ? (
                <i className="ri-heart-fill"></i>
              ) : (
                <i className="ri-heart-line"></i>
              )}
            </button>
            <button className="btn booking__btn">
              <Link to={`/tours/${_id}`}>Đặt Ngay</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
