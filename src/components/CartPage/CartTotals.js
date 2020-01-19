import React, { useContext } from "react";
import TechStoreContext from "../../context/TechStoreContext/techStoreContext";

const CartTotals = ({ history }) => {
  const techStoreContext = useContext(TechStoreContext);
  const { cartsSubTotal, cartTax, cartTotal, clearCart } = techStoreContext;

  return (
    <div className='container'>
      <div className='row'>
        <div className='col text-title text-center my-5'>
          <button
            className='btn btn-outline-danger text-capitalize mb-4'
            onClick={clearCart}
          >
            clear cart
          </button>
          <h3> subtotal : ${cartsSubTotal}</h3>
          <h3> tax : ${cartTax}</h3>
          <h3> total : ${cartTotal}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
