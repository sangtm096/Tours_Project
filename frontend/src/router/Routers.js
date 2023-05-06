import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminHome from "../admin/Home";
import UpdateUser from "../admin/handleUsers/UpdateUser";
import AddUser from "../admin/handleUsers/AddUser";

import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import About from "../pages/About";
import Favorites from "../pages/Favorites";

import TourDetails from "./../pages/TourDetails";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";

import { AuthContext } from "./../context/AuthContext";
import AddTour from "../admin/handleTours/AddTour";
import ManagementTours from "../admin/ManagementTours";
import UpdateTour from "../admin/handleTours/UpdateTour";
import ManagementBookings from "../admin/ManagementBookings";

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <ProtectedRouteAdmin>
            <AdminHome />
          </ProtectedRouteAdmin>
        }
      />
      <Route
        path="/admin/add-user"
        element={
          <ProtectedRouteAdmin>
            <AddUser />
          </ProtectedRouteAdmin>
        }
      />
      <Route
        path="/admin/update-user/:id"
        element={
          <ProtectedRouteAdmin>
            <UpdateUser />
          </ProtectedRouteAdmin>
        }
      />
      <Route
        path="/admin/tours"
        element={
          <ProtectedRouteAdmin>
            <ManagementTours />
          </ProtectedRouteAdmin>
        }
      />
      <Route
        path="/admin/add-tour"
        element={
          <ProtectedRouteAdmin>
            <AddTour />
          </ProtectedRouteAdmin>
        }
      />
      <Route
        path="/admin/update-tour/:id"
        element={
          <ProtectedRouteAdmin>
            <UpdateTour />
          </ProtectedRouteAdmin>
        }
      />
      <Route
        path="/admin/bookings"
        element={
          <ProtectedRouteAdmin>
            <ManagementBookings />
          </ProtectedRouteAdmin>
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Navigate to="/home" />
          </ProtectedRoute>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tours"
        element={
          <ProtectedRoute>
            <Tours />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favorites"
        element={
          <ProtectedRouteUser>
            <Favorites />
          </ProtectedRouteUser>
        }
      />
      <Route
        path="/tours/:id"
        element={
          <ProtectedRoute>
            <TourDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        }
      />
      <Route
        path="/thank-you"
        element={
          <ProtectedRoute>
            <ThankYou />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tours/search"
        element={
          <ProtectedRoute>
            <SearchResultList />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

const ProtectedRouteAdmin = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user && user.role === "admin") {
    return children;
  }
  return <Navigate to="/" replace />;
};

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user || user.role === "user") {
    return children;
  }
  return <Navigate to="/admin" replace />;
};

const ProtectedRouteUser = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default Routers;
