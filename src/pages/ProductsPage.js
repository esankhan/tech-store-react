import React from "react";
import Products from "../components/Products";
import Hero from "../components/Hero";
import productsBcg from "../images/productsBcg.jpeg";

const ProductsPage = () => {
  return (
    <div>
      <Hero img={productsBcg} />
      <Products />
    </div>
  );
};

export default ProductsPage;
