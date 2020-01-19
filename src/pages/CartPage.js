import React from "react";
import CartSection from "../components/CartPage";
import Hero from "../components/Hero";
import storeBcg from "../images/storeBcg.jpeg";
const CartPage = props => {
  return (
    <div>
      <Hero img={storeBcg} />
      <CartSection history={props.history}></CartSection>
    </div>
  );
};

export default CartPage;
