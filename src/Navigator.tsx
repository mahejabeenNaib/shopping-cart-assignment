import React from "react";
import { Route, Routes } from "react-router-dom";
import { CART, HOME, LOGIN, PRODUCTS, REGISTER } from "./constants/routes";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Login from "./pages/login";
import Products from "./pages/product";
import Register from "./pages/register";

const Navigator = () => {
  return (
    <>
      <Routes>
        <Route  path={HOME} element={<Home />} />
        <Route  path={LOGIN} element={<Login />} />
        <Route  path={REGISTER} element={<Register />} />
        <Route  path={CART} element={<Cart />} />
        <Route  path={PRODUCTS} element={<Products />} />
      </Routes>
    </>
  );
};

export default Navigator;
