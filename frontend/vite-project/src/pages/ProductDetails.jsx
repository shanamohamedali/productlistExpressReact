import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import axios from "axios";
import "../pages/productDetails.css";
import { ProductImgGallery } from "../components/ProductImgGallery/ProductImgGallery";
import { API_URL } from "../constants/constant";

export function ProductDetails() {
  const [productDetails, setProductDetails] = useState([]);
  const [review, setReview] = useState([]);
  const [specification, setSpecification] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleViewProduct = async () => {
    try {
      const response = await axios(`${API_URL}/${id}`);
      if (response) {
        setProductDetails(response.data);
        setReview(response.data[0].reviews);
        setSpecification(response.data[0].dimensions);
      }
      console.log("===specification", response.data[0].dimensions);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("===product Details", productDetails);

  useEffect(() => {
    handleViewProduct();
  }, [id]);

  return (
    <>
      <div onClick={() => navigate(-1)} className="back-arrow">
        <FaArrowLeft size={20} />
      </div>
      {productDetails.map((product) => (
        <div key={product.id} className="details-main-container">
          <div className="image-section">
            <img src={product.images} alt={product.title} />
            {/* <ProductImgGallery
          images={productDetails.images}
          title={productDetails.title}
        /> */}
          </div>

          <div className="details-section">
            <h3>{product.title}</h3>
            <h4>Brand:{product.brand}</h4>
            <p>{product.description}</p>
            <div className="rating-section">
              {product.rating}
              {""}
              <FaStar color="#FFC000" />
            </div>
            <div>
              <h3>AED {product.price} </h3>{" "}
              <span style={{ display: "inline", color: "red" }}>
                {product.discountPercentage && (
                  <p>{product.discountPercentage}% OFF</p>
                )}
              </span>
            </div>
            <p>Stock: {product.availabilityStatus}</p>
            <p>Warranty Information: {product.warrantyInformation} </p>

            <div>
              <h3>
                <u>Product Specification</u>
              </h3>
              <div>
                <p>Weight: {product.weight}</p>
                <p>Width: {specification.width}</p>
                <p>Height: {specification.height} </p>
                <p>Depth: {specification.depth} </p>
              </div>
            </div>
            <button>Add to Cart</button>
            <h3>
              <u>Rating & Reviews</u>
            </h3>
            {review.map((item, index) => (
              <div className="review-section" key={index}>
                <h4>{item.comment} </h4>
                <div className="rating-section">
                  {item.rating}
                  {""}
                  <FaStar color="#FFC000" padding="10px" />
                </div>

                <i style={{ marginLeft: "20px" }}>-{item.reviewerName} </i>
                <hr></hr>
              </div>
            ))}
          </div>
        </div>
      ))}
      ;
      {/* <div className="similar-products-section">
        <h3>Similar Products</h3>
      </div> */}
    </>
  );
}
