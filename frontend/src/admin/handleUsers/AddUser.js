import React, { useState } from "react";
import "./edituser.css";
import { BASE_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = async (data) => {
    const res = await fetch(`${BASE_URL}/users/user`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addUser({
      username: username,
      email: email,
      password: password,
    });
    console.log(response);
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
        <input type="submit" value="AddUser" />
      </form>
    </div>
  );
};

export default AddUser;
