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
    if (response.success) {
      alert(response.message);
    }
    navigate("/admin");
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h2 className="text-center">Thêm User</h2>
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
          placeholder="Vui lòng nhập họ tên"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Vui lòng nhập email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <label htmlFor="password">Mật khẩu</label>
        <input
          type="password"
          id="password"
          placeholder="Vui lòng nhập password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <input type="submit" value="Thêm User" />
      </form>
    </div>
  );
};

export default AddUser;
