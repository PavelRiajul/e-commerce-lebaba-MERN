import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import ShopPage from "../pages/shop/ShopPage";
import CategoryPage from "../pages/category/CategoryPage";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Register from "../components/Register";
import SingleProduct from "../pages/shop/productDetails/SingleProduct";
import PaymentSuccess from "../components/PaymentSuccess";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import PrivetRoute from "./PrivetRoute";

const RoutePage = () => {
  return (
    <div>
      <Routes>
        {/* Main App Routes */}
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route path="success" element={<PaymentSuccess />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        {/* authentication */}
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivetRoute>
              <DashboardLayout />
            </PrivetRoute>
          }
        >
          {''}
          {/* Absolute path -> absolute path er bitore relative path use kore -> aeta holo parents*/}
          {/* User Routes */}
          <Route path="" element={<div>User Dashboard</div>} />
          <Route path="orders" element={<div>Orders</div>} />{" "}
          {/* relative path aeta holo children */}
          <Route path="payments" element={<div>Payments</div>} />
          <Route path="profile" element={<div>Profile</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
          {/* Admin Routes */}
          <Route
            path="admin"
            element={
              <PrivetRoute role="admin">
                <div>Admin Dashboard</div>
              </PrivetRoute>
            }
          />
          <Route
            path="manage-products"
            element={
              <PrivetRoute role="admin">
                <div>manage products</div>
              </PrivetRoute>
            }
          />
          <Route
            path="manage-orders"
            element={
              <PrivetRoute role="admin">
                <div>manage orders</div>
              </PrivetRoute>
            }
          />
          <Route
            path="add-product"
            element={
              <PrivetRoute role="admin">
                <div>add new product</div>
              </PrivetRoute>
            }
          />
          <Route
            path="update-product/:id"
            element={
              <PrivetRoute role="admin">
                <div>update products</div>
              </PrivetRoute>
            }
          />
          <Route
            path="update-product/:id"
            element={
              <PrivetRoute role="admin">
                <div>update products</div>
              </PrivetRoute>
            }
          />
          <Route
            path="users"
            element={
              <PrivetRoute role={"admin"}>
                <div>Users</div>
              </PrivetRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
export default RoutePage;
