import React from "react";

const CartColumns = () => {
  return (
    <div className='container text-center d-none d-lg-block my-5'>
      <div className='row'>
        {/* Single Column */}
        <div className='col-lg-2'>
          <p className='text-uppercase'>product</p>
        </div>
        {/* End of single column */}
        <div className='col-lg-2'>
          <p className='text-uppercase'>name of product</p>
        </div>
        {/* End of single column */}
        <div className='col-lg-2'>
          <p className='text-uppercase'>price</p>
        </div>
        {/* End of single column */}
        <div className='col-lg-2'>
          <p className='text-uppercase'>quantity</p>
        </div>
        {/* End of single column */}
        {/* <div className='col-lg-2'>
          <p className='text-uppercase'>remove</p>
        </div> */}
        {/* End of single column */}
        <div className='col-lg-2'>
          <p className='text-uppercase'>total</p>
        </div>
        {/* End of single column */}
      </div>
    </div>
  );
};

export default CartColumns;
