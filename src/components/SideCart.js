import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TechStoreContext from "../context/TechStoreContext/techStoreContext";

const SideCart = () => {
  const techStoreContext = useContext(TechStoreContext);
  const { cartOpen, handleSideCart, cart, cartTotal } = techStoreContext;

  const CartWrapper = styled.div`
    position: fixed;
    top: 60.5px;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--mainGray);
    z-index: 1;
    transform: ${cartOpen ? "translateX(0)" : "translate(100%)"};
    border-left: 4px solid var(--primaryColor);
    transition: var(--mainTransition);
    @media (min-width: 576px) {
      width: 20rem;
    }
    overflow: scroll;
    padding: 1.5rem;
    ul {
      padding: 0 !important;
    }
  `;

  return (
    <CartWrapper onClick={handleSideCart}>
      <ul className='list-group overflow-auto'>
        {cart.map(item => {
          return (
            <li key={item.id} className=' list-group-item cart-item mb-4'>
              <img src={`../${item.image}`} width='35px' alt='cart-item' />
              <div className='mt-3'>
                <h6 className='text-uppercase'>{item.title}</h6>
              </div>
              <h6 className='text-title text-capitalize'>
                amount : {item.count}
              </h6>
            </li>
          );
        })}
      </ul>
      <h4 className='text-capitalize text-main mt-3'>
        cart total : ${cartTotal}
      </h4>
      <div className='text-center my-5'>
        <Link to='/cart' className='main-link'>
          cart page
        </Link>
      </div>
    </CartWrapper>
  );
};

export default SideCart;
