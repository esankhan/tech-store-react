import React, { useContext } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import Title from "./Title";
import TechStoreContext from "../context/TechStoreContext/techStoreContext";

const Featured = () => {
  const techStoreContext = useContext(TechStoreContext);
  const { featuredProducts } = techStoreContext;

  // console.log(techStoreContext.featuredProducts);

  return (
    <section className='py-5'>
      <div className='container'>
        {/* Title */}
        <Title title='featured Products' center={true} />
        {/* products */}
        <div className='row'>
          {featuredProducts.map(product => {
            return <Product key={product.id} product={product}></Product>;
          })}
        </div>
        <div className='row mt-5'>
          <div className='col text-center'>
            <Link to='/products' className='main-link'>
              our products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
