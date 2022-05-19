import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import CartState from "./context/cartContext/CartState";

function App() {
  return (
    <CartState>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </CartState>
  );
}

export default App;
