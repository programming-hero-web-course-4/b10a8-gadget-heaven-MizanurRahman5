import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_title, product_image, price, product_id} = product;
  return (
    <div>
      
        <div className="card h-[400px] bg-base-100">
          <figure className="px-10 object-cover pt-10">
            <img src={product_image} alt="Shoes" className="rounded-xl " />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{product_title}</h2>
            <p>Price : {price}$</p>
            <div className="">
              <Link to={`/product/${product_id}`}><button className="btn hover:bg-purple-600 rounded-3xl hover:text-white border-purple-700">View details</button></Link>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Product;
