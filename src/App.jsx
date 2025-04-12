import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";

import bannerZttw from "./assets/zttw.webp";
import bannerHf from "./assets/highFashion.png";
import bannerZara from "./assets/zara.png";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main className="bg-primary text-tertiary ">
      <BrowserRouter>
        <Toaster position="top-right" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route
            path="/zttw"
            element={<Category category="ZTTW" banner={bannerZttw} />}
          />
          <Route
            path="/hf"
            element={<Category category="HF" banner={bannerHf} />}
          />
          <Route
            path="/zara"
            element={<Category category="ZARA" banner={bannerZara} />}
          />
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
