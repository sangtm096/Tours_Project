import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./edituser.css";

import { BASE_URL } from "../../utils/config";

const UpdateUser = () => {
  const { state } = useLocation();
  const _id = state.userId;
  const [username, setUsername] = useState(state.username);
  const [email, setEmail] = useState(state.email);
  const [password, setPassword] = useState(state.password);
  const navigate = useNavigate();

  const updateUser = async (data) => {
    const res = await fetch(`${BASE_URL}/users/${_id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateUser({
      username: username,
      email: email,
      password: password,
    });
    if (response.success) {
      alert(response.message);
    }
    navigate("/admin");
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          placeholder="Nhap username ..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Nhap email ..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Nhap password ..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateUser;
