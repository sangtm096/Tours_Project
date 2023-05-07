import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./edittour.css";

import { BASE_URL } from "../../utils/config";

const UpdateTour = () => {
  const { state } = useLocation();
  const _id = state.tourId;
  const navigate = useNavigate();

  const [title, setTitle] = useState(state.title);
  const [address, setAddress] = useState(state.address);
  const [distance, setDistance] = useState(state.distance);
  const [price, setPrice] = useState(state.price);
  const [maxGroupSize, setMaxGroupSize] = useState(state.maxGroupSize);
  const [desc, setDesc] = useState(state.desc);
  const [photo, setPhoto] = useState(state.photo);

  const updateTour = async (data) => {
    const res = await fetch(`${BASE_URL}/tours/${_id}`, {
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
    const response = await updateTour({
      title: title,
      address: address,
      distance: distance,
      price: price,
      maxGroupSize: maxGroupSize,
      desc: desc,
      photo: photo,
    });
    if (response.success) {
      alert(response.message);
    }
    navigate("/admin/tours");
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h2 className="text-center">Chỉnh sửa Tour</h2>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">Tên tour</label>
        <input
          type="text"
          id="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <label htmlFor="address">Địa điểm</label>
        <input
          type="text"
          id="address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={address}
        />
        <label htmlFor="distance">Khoảng cách</label>
        <input
          type="number"
          id="distance"
          onChange={(e) => {
            setDistance(e.target.value);
          }}
          value={distance}
        />
        <label htmlFor="price">Giá tour</label>
        <input
          type="number"
          id="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
        />
        <label htmlFor="maxGroupSize">Số người tối đa</label>
        <input
          type="number"
          id="maxGroupSize"
          onChange={(e) => {
            setMaxGroupSize(e.target.value);
          }}
          value={maxGroupSize}
        />
        <label htmlFor="desc">Mô tả về tour</label>
        <input
          type="text"
          id="desc"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          value={desc}
        />
        <label htmlFor="photo">Link Ảnh</label>
        <input
          type="text"
          id="photo"
          onChange={(e) => {
            setPhoto(e.target.value);
          }}
          value={photo}
        />

        <input
          type="submit"
          value="Chỉnh sửa"
          style={{ fontSize: "24px", padding: "5px" }}
        />
      </form>
    </div>
  );
};

export default UpdateTour;
