import React from "react";
import Title from "./Title";
import aboutBcg from "../images/aboutBcg.jpeg";

const AboutComponent = () => {
  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <img
              src={aboutBcg}
              alt='About us'
              className='img-fluid img-thumbnail'
              style={{
                background: "var(--darkGray)"
              }}
            />
          </div>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <Title title='about us'></Title>
            <p className='text-lead tex-muted my-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              mollitia labore numquam magnam. Aliquid illo corrupti officia
              vero, magnam dolor.
            </p>
            <p className='text-lead tex-muted my-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              mollitia labore numquam magnam. Aliquid illo corrupti officia
              vero, magnam dolor.
            </p>
            <button
              className='main-link'
              type='button'
              style={{ marginTop: "2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
