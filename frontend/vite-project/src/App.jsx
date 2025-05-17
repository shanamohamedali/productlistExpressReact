import { useState } from "react";
import { Header } from "./components/Header/Header";
// import { ProductCard } from "./components/Product/ProductCard";
import { Routes,Route } from "react-router-dom";
import {Products} from "./pages/Products"
import { ProductDetails } from "./pages/ProductDetails";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/"  element={<Products/>}></Route>
        <Route path="/product"  element={<Products/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
