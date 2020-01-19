import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = ({ history }) => {
  return (
    <section className='py-5'>
      {/* title */}
      <div className='container'>
        <Title title='your cart items' center={true} />
      </div>
      {/* cart columns */}
      <CartColumns></CartColumns>
      {/* cart list */}
      <CartList></CartList>
      {/* cart total */}
      <CartTotals history={history}></CartTotals>
    </section>
  );
};

export default Cart;
