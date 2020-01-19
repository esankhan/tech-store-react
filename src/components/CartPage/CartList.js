import React, { useContext } from "react";
import CartItem from "./CartItem";
import TechStoreContext from "../../context/TechStoreContext/techStoreContext";

const CartList = () => {
  const techStoreContext = useContext(TechStoreContext);
  const { cart, increment, decrement, removeItem } = techStoreContext;
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {cart.length === 0 ? (
            <h1 className='text-title text-center my-4'>
              your cart is currently empty
            </h1>
          ) : (
            <div>
              {cart.map(item => {
                return (
                  <CartItem
                    key={item.id}
                    cartItem={item}
                    increment={increment}
                    decrement={decrement}
                    removeItem={removeItem}
                  ></CartItem>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartList;
