import React, { useState } from "react";
import "./edittour.css";
import { BASE_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";

const AddTour = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState("");
  const [price, setPrice] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");

  const addTour = async (data) => {
    const res = await fetch(`${BASE_URL}/tours/`, {
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
    const response = await addTour({
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
      <h2 className="text-center">Thêm Tour</h2>
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
          placeholder="Vui lòng nhập tên tour"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <label htmlFor="address">Địa điểm</label>
        <input
          type="text"
          id="address"
          placeholder="Vui lòng nhập địa điểm"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={address}
        />
        <label htmlFor="distance">Khoảng cách</label>
        <input
          type="number"
          id="distance"
          placeholder="Vui lòng nhập khoảng cách"
          onChange={(e) => {
            setDistance(e.target.value);
          }}
          value={distance}
        />
        <label htmlFor="price">Giá tour</label>
        <input
          type="number"
          id="price"
          placeholder="Vui lòng nhập giá tour"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
        />
        <label htmlFor="maxGroupSize">Số người tối đa</label>
        <input
          type="number"
          id="maxGroupSize"
          placeholder="Vui lòng nhập số người tối đa"
          onChange={(e) => {
            setMaxGroupSize(e.target.value);
          }}
          value={maxGroupSize}
        />
        <label htmlFor="desc">Mô tả về tour</label>
        <input
          type="text"
          id="desc"
          placeholder="Vui lòng nhập mô tả về tour"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          value={desc}
        />
        <label htmlFor="photo">Link Ảnh</label>
        <input
          type="text"
          id="photo"
          placeholder="Vui lòng nhập link ảnh"
          onChange={(e) => {
            setPhoto(e.target.value);
          }}
          value={photo}
        />

        <input
          type="submit"
          value="Thêm Tour"
          style={{ fontSize: "24px", padding: "5px" }}
        />
      </form>
    </div>
  );
};

export default AddTour;
