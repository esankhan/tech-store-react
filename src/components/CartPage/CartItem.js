import React from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const CartItem = ({ cartItem, increment, decrement }) => {
  const { id, title, price, count, total, image } = cartItem;
  return (
    <div className='row mt-5 mt-lg-0 text-capitalize text-center align-items-center'>
      {/* image */}
      <div className='col-10 mx-1.5 col-lg-2 pb-2'>
        <img src={image} width='60px' alt='product' className='img-fluid' />
      </div>
      {/* End of Image */}
      {/* Title */}
      <div className='col-10 mx-1.5 col-lg-2 pb-2'>
        <span className='d-lg-none'>product : </span>
        {title}
      </div>
      {/* End of Title */}
      {/* price */}
      <div className='col-10 mx-1.5 col-lg-2 pb-2'>
        <span className='d-lg-none'>price : </span>${price}
      </div>
      {/* End of price */}
      {/* Count Controls */}
      <div className='col-10 mx-1.5 col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <FaChevronCircleDown
              className='cart-icon text-primary'
              onClick={() => decrement(id)}
            />

            <span className='text-title text-muted mx-3'>{count}</span>
            <FaChevronCircleUp
              className=' cart-icon text-primary '
              onClick={() => increment(id)}
            />
          </div>
        </div>
      </div>
      {/* End of COunt Controls */}
      {/* remove item */}
      {/* <div className='col-10 mx-auto col-lg-2'>
        <FaTrash
          className='text-danger cart-icon'
          onClick={() => removeItem(id)}
        />
      </div> */}
      {/* End of remove item */}
      {/* item total */}
      <div className='col-10 mx-1.5 col-lg-2'>
        <strong className='text-muted'>total : </strong>${total}
      </div>
      {/* End of item total */}
    </div>
  );
};

export default CartItem;
