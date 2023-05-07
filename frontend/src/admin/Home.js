import React, { useState, useEffect } from "react";
import { Container, Row, Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import CommonSection from "../shared/CommonSection";

import "./home.css";
import Newsletter from "../shared/Newsletter";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const AdminHome = () => {
  const { data: users, loading, error } = useFetch(`${BASE_URL}/users`);
  const [usersList, setUsersList] = useState(users);

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  const deleteUser = async (_id) => {
    try {
      const res = await fetch(`${BASE_URL}/users/${_id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
      } else {
        alert(result.message);
        setUsersList((state) => {
          return state.filter((user) => {
            return user._id !== result.data._id;
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
          <Link to="/admin/add-user" className="text-white nav__link">
            Add User
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
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {usersList?.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link
                        to={`/admin/update-user/${user._id}`}
                        state={{
                          userId: user._id,
                          username: user.username,
                          email: user.email,
                          password: user.password,
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
                          deleteUser(`${user._id}`);
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

export default AdminHome;
