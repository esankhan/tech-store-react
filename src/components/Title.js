import React from "react";
import styled from "styled-components";

const Title = ({ title, center }) => {
  const TitleWrapper = styled.div`
    text-align: ${center ? "center" : "left"};
    .title-underline {
      height: 0.25rem;
      width: 7rem;
      background: var(--primaryColor);
      margin: ${center ? "0 auto" : "0"};
    }
  `;
  return (
    <TitleWrapper className='row'>
      <div className='col'>
        <h2 className='text-title'>{title}</h2>
        <div className='title-underline'></div>
      </div>
    </TitleWrapper>
  );
};

export default Title;
