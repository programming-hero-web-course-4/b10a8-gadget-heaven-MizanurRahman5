import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { addToCart, addToWishlist } from "../utility";

const ProductDetails = () => {
  const data = useLoaderData();
  const { productId } = useParams();
  const [product, setProducts] = useState({});
  

  useEffect(() => {
    const singleData = data.find((product) => product.product_id == productId);
    setProducts(singleData);
  }, [data, productId]);

  const {
    description,
    product_title,
    product_image,
    price,
    rating,
    Specification = [],
    availability,
  } = product;

  const handleAddToCart = (product) =>{
    addToCart(product)
   
  }


const handleAddToWishlist = (product) => {
  addToWishlist(product);
};



  return (
    <div className="bg-purple-700 relative pb-64 flex text-white flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold">Product Details</h1>
      <p className="max-w-[750px] text-center">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div className="absolute p-3 md:w-[1210px] bg-white rounded-3xl top-40 flex gap-3">
        <div>
          <img className="rounded-3xl h-[400px]" src={product_image} alt="" />
        </div>
        <div className="space-y-2">
          <h2 className="text-black">{product_title}</h2>
          <h4 className="text-black">Price : {price}</h4>
          <button className="btn btn-xs">{`${
            availability ? "In Stock" : "Out of Stock"
          }`}</button>
          <p className="text-black">{description}</p>
          <div>
            <h4 className="text-black">Specification:</h4>
            <ul className="text-black">
              {Specification.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <h2 className="text-black font-bold text-xl">Rating :</h2>
          <div className="flex">
            <div className="rating">
              <input
                type="radio"
                name={rating}
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <p className="text-black">{rating}</p>
            </div>
          </div>
          <div className="text-black flex items-center gap-3">
            <div onClick={() => handleAddToCart(product)} className="flex items-center btn bg-purple-700 rounded-3xl">
            <button>Add To Card</button> <MdOutlineShoppingCart />
            </div>
            <button onClick={() => handleAddToWishlist(product)} className="btn rounded-3xl"><AiOutlineHeart /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
