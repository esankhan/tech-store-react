import React, { useContext } from "react";
import TechStoreContext from "../context/TechStoreContext/techStoreContext";
import styled from "styled-components";

const Footer = () => {
  const techStoreContext = useContext(TechStoreContext);
  const { socialData } = techStoreContext;

  const FooterWrapper = styled.footer`
    background: var(--darkGray);
    color: var(--mainWhite);
    .icon {
      font-size: 1.5rem;
      color: var(--mainWhite);
      transition: var(--mainTransition);
    }
    .icon:hover {
      color: var(--primaryColor);
      cursor: pointer;
    }
  `;

  return (
    <FooterWrapper>
      <div className='container py-3'>
        <div className='row'>
          <div className='col-md-6'>
            <p className='text-capitalize'>
              copyright &copy; esankhan3@gmail.com 2019 all rights reserved
            </p>
          </div>
          <div className='col-md-6 d-flex justify-content-around'>
            {socialData.map(item => (
              <a key={item.id} href={item.url}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
