import React, { useState, useEffect } from "react";
import { Container, Row, Button, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import CommonSection from "../shared/CommonSection";

import "./home.css";
import Newsletter from "../shared/Newsletter";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const ManagementBookings = () => {
  const navigate = useNavigate();
  const { data: bookings, loading, error } = useFetch(`${BASE_URL}/booking`);
  const [bookingsList, setBookingsList] = useState(bookings);

  useEffect(() => {
    setBookingsList(bookings);
  }, [bookings]);

  const deleteBooking = async (_id) => {
    try {
      const res = await fetch(`${BASE_URL}/booking/${_id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
      } else {
        alert(result.message);
        setBookingsList((state) => {
          return state.filter((bookings) => {
            return bookings._id !== result.data._id;
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
              Quản Lý Users
            </Link>
          </Button>
          <Button className="navbar__admin w-25">
            <Link to="/admin/tours" className="text-white nav__link">
              Quản Lý Tours
            </Link>
          </Button>
          <Button className="navbar__admin w-25">
            <Link to="/admin/bookings" className="text-white nav__link">
              Quản Lý Bookings
            </Link>
          </Button>
        </Row>
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
                  <th>Tên khách hàng</th>
                  <th>Số lượng vé</th>
                  <th>Số điện thoại</th>
                  <th>Ngày khởi hành</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookingsList?.map((booking, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{booking.tourName}</td>
                    <td>{booking.fullName}</td>
                    <td>{booking.guestSize}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.bookAt}</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteBooking(`${booking._id}`);
                        }}
                        style={{
                          padding: "3px",
                          color: "red",
                          marginRight: "3px",
                        }}
                      >
                        <i className="ri-delete-bin-fill"></i>
                      </button>
                      <button
                        onClick={() => {
                          alert("Tour đã được duyệt");
                          navigate("/admin/bookings");
                        }}
                        style={{ padding: "3px", color: "green" }}
                      >
                        <i className="ri-checkbox-fill"></i>
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

export default ManagementBookings;
