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
import UserDMain from "../pages/dashboard/user/dashboard/UserDMain";
import UserOrders from "../pages/dashboard/orders/UserOrders";
import OrderDetails from "../pages/dashboard/orders/OrderDetails";
import UserPayments from "../pages/dashboard/payments/UserPayments";
import UserReviews from "../pages/dashboard/reviews/UserReviews";
import UserProfile from "../pages/dashboard/profile/UserProfile";

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
          <Route path="/orders/:orderId" element={<OrderDetails/>} /> {/* single order complete route */}
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
          <Route path="" element={<UserDMain/>} />
          <Route path="orders" element={<UserOrders/>} />
          {/* relative path aeta holo children */}
          <Route path="payments" element={<UserPayments/>} />
          <Route path="profile" element={<UserProfile/>} />
          <Route path="reviews" element={<UserReviews/>} />
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
