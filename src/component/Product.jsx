import React from "react";

const Product = ({ product }) => {
  const { product_title,product_image,price } = product;
  return (
    <div>
      <div className="card bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src={product_image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{product_title}</h2>
          <p>Price : {price}</p>
          <div className="">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
