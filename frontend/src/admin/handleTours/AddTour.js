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
    console.log(response);
    if (response.success) {
      alert(response.message);
    }
    navigate("/admin/tours");
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Nhap title ..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Nhap address ..."
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={address}
        />
        <label htmlFor="distance">Distance</label>
        <input
          type="number"
          id="distance"
          placeholder="Nhap distance ..."
          onChange={(e) => {
            setDistance(e.target.value);
          }}
          value={distance}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          placeholder="Nhap price ..."
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
        />
        <label htmlFor="maxGroupSize">MaxGroupSize</label>
        <input
          type="number"
          id="maxGroupSize"
          placeholder="Nhap maxGroupSize ..."
          onChange={(e) => {
            setMaxGroupSize(e.target.value);
          }}
          value={maxGroupSize}
        />
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          id="desc"
          placeholder="Nhap description ..."
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          value={desc}
        />
        <label htmlFor="photo">Link Anh</label>
        <input
          type="text"
          id="photo"
          placeholder="Nhap link anh ..."
          onChange={(e) => {
            setPhoto(e.target.value);
          }}
          value={photo}
        />

        <input type="submit" value="AddTour" />
      </form>
    </div>
  );
};

export default AddTour;
