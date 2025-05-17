import { createContext, useEffect, useState } from "react";
import { API_URL } from "../constants/constant";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
 

  const fetchProducts = async () => {
    try {
      const response = await axios(API_URL);
      console.log("===productlist", response.data);
      if (response) 
        setProductList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ productList }}>
      {children}
    </ProductContext.Provider>
  );
};
