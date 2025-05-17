import React, { useState } from "react";
import "../Product/productcard.css";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function ProductCard({ productList }) {
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  console.log("===productlist", productList);

  // const handleToggleLike=(id)=>{
  //   e.preventDefault();
  // //   const {id}=id;
  // //   filteredProductList=productList.

  // // }
  return (
    <>
      {productList.map((item) => (
        <div key={item.id} className="productcard-main-container">
          <div className="image">
            <img src={item.images} height={150} />
            <div className="like" onClick={() => setLike(!like)}>
              <FaHeart style={{ color: like? "#800000" : "#b3b6b7" }} />
            </div>
          </div>
          <div>
            <h3>{item.title}</h3>
            <h3>{item.category}</h3>
            <div className="price">
              <LiaRupeeSignSolid size={25} />
              <h2>{item.price}</h2>
            </div>
          </div>
          {item.discount ? <p>{`(${item.discount}% off)`}</p> : ""}

          <button onClick={() => navigate(`/product/${item.id}`)}>
            View Product
          </button>
        </div>
      ))}
    </>
  );
}
