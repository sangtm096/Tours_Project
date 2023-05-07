import React, { useState, useEffect } from "react";
import { Container, Row, Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import CommonSection from "../shared/CommonSection";

import "./home.css";
import Newsletter from "../shared/Newsletter";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const ManagementTours = () => {
  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours`);
  const [toursList, setToursList] = useState(tours);

  useEffect(() => {
    setToursList(tours);
  }, [tours]);

  const deleteTour = async (_id) => {
    try {
      const res = await fetch(`${BASE_URL}/tours/${_id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
      } else {
        alert(result.message);
        setToursList((state) => {
          return state.filter((tour) => {
            return tour._id !== result.data._id;
          });
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <CommonSection title={"Ong Sang Tours"} />

      <Container style={{ marginTop: "50px" }}>
        <Row className="d-flex align-items-center justify-content-left">
          <Button className="navbar__admin w-25">
            <Link to="/admin" className="text-white nav__link">
              Users Management
            </Link>
          </Button>
          <Button className="navbar__admin w-25">
            <Link to="/admin/tours" className="text-white nav__link">
              Tours Management
            </Link>
          </Button>
          <Button className="navbar__admin w-25">
            <Link to="/admin/bookings" className="text-white nav__link">
              Bookings Management
            </Link>
          </Button>
        </Row>
        <Button className="navbar__admin-add">
          <Link to="/admin/add-tour" className="text-white nav__link">
            Add Tour
          </Link>
        </Button>
      </Container>

      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Table striped>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tour</th>
                  <th>Địa chỉ</th>
                  <th>Khoảng cách</th>
                  <th>Giá</th>
                  <th>Số người</th>
                  <th>Mô tả</th>
                  <th>Ảnh</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {toursList?.map((tour, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{tour.title}</td>
                    <td>{tour.address}</td>
                    <td>{tour.distance} Km</td>
                    <td>{tour.price} $</td>
                    <td>{tour.maxGroupSize}</td>
                    <td>{tour.desc}</td>
                    <td>{tour.photo}</td>
                    <td>
                      <Link
                        to={`/admin/update-tour/${tour._id}`}
                        state={{
                          tourId: tour._id,
                          title: tour.title,
                          address: tour.address,
                          distance: tour.distance,
                          price: tour.price,
                          maxGroupSize: tour.maxGroupSize,
                          desc: tour.desc,
                          photo: tour.photo,
                        }}
                      >
                        <button
                          style={{
                            padding: "3px",
                            marginRight: "10px",
                            color: "blue",
                          }}
                        >
                          <i className="ri-pencil-fill"></i>
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          deleteTour(`${tour._id}`);
                        }}
                        style={{ padding: "3px", color: "red" }}
                      >
                        <i className="ri-delete-bin-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default ManagementTours;
