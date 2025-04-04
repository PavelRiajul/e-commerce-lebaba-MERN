import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import ShopPage from "../pages/shop/ShopPage";
import CategoryPage from "../pages/category/CategoryPage";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Register from "../components/Register";

const RoutePage = () => {
  return (
    <div>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/categories/:categoryName" element={<CategoryPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
        <Route>
          {/* authentication */}
          <Route path="/login" element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
    </div>
  );
};
export default RoutePage;
