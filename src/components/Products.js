import React, { useContext } from "react";

import TechStoreContext from "../context/TechStoreContext/techStoreContext";
import Title from "./Title";
import Product from "./Product";
import FilterProducts from "./FilterProdcuts";

const Products = () => {
  const techStoreContext = useContext(TechStoreContext);

  const { filteredProducts } = techStoreContext;

  return (
    <section className='py-5'>
      <div className='container'>
        {/* Title */}
        <Title center title='our products'></Title>
        {/* FilterProdcuts */}
        <FilterProducts></FilterProducts>
        {/* End of FilterProducts */}
        {/* total count */}
        <div className='row'>
          <div className='col-10 mx-auto'>
            <h6 className='text-title'>
              total products : {filteredProducts.length}
            </h6>
          </div>
        </div>
        {/* end of total count */}
        {/* Products */}
        {filteredProducts.length === 0 ? (
          <div className='col text-title text-center'>
            sorry, no items matched your search
          </div>
        ) : (
          <div className='row py-5'>
            {filteredProducts.map(product => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        )}

        {/* end of product */}
      </div>
    </section>
  );
};

export default Products;
