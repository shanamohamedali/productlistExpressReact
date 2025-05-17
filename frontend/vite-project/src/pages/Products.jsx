import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductCard } from "../components/Product/ProductCard";
import "../pages/Products.css";

export function Products() {
  const { productList} = useContext(ProductContext);
  return (
    <div className="products-main-container">

       <ProductCard
        productList={productList}
       
      />
      
    </div>
  );
}
