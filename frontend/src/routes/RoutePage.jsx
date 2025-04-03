import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import ShopPage from "../pages/shop/ShopPage";

const RoutePage = () => {
  return (
    <div>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </div>
  );
};
export default RoutePage;
