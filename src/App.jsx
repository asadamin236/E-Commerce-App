import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import SearchItems from "./components/SearchItems";
import Card from "./components/Card";
import { items } from "./components/Data";

const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route
            path="/"
            element={<Product cart={cart} setCart={setCart} items={data} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail cart={cart} setCart={setCart} />}
          />
          <Route
            path="/Search/:term"
            element={<SearchItems cart={cart} setCart={setCart} />}
          />
          <Route
            path="/card"
            element={<Card cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
