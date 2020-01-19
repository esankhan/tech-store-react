import React, { useContext } from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import TechStoreContext from "../context/TechStoreContext/techStoreContext";
import logo from "../images/logo.svg";
const Navbar = () => {
  const techStoreContext = useContext(TechStoreContext);
  //console.log(techStoreContext);
  const { handleSidebar, handleSideCart, cartItems } = techStoreContext;
  const NavWrapper = styled.nav`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 1rem 1.5rem;
    background: var(--mainGray);
    border-bottom: 3px solid var(--primaryColor);
    z-index: 1;
    .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 100%;
    }
    .nav-icon {
      font-size: 1.5rem;
      cursor: pointer;
    }
    .nav-cart {
      position: relative;
    }
    .cart-items {
      background: var(--primaryColor);
      color: var(--mainWhite);
      font-size: 0.8rem;
      position: absolute;
      top: -8px;
      right: -8px;
      padding: 0 5px;
      border-radius: 50%;
    }
  `;
  return (
    <NavWrapper>
      <div className='nav-center'>
        <div>
          <FaBars className='nav-icon' onClick={handleSidebar} />
        </div>
        <img src={logo} alt='company-logo' />
        <div className='nav-cart'>
          <FaCartPlus
            className='nav-icon'
            onClick={handleSideCart}
          ></FaCartPlus>
          <div className='cart-items'>{cartItems}</div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;
