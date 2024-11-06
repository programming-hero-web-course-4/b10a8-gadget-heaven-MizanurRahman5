import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { addToCart, addToWishlist } from "../utility";

const ProductDetails = () => {
  const data = useLoaderData();
  const { productId } = useParams();
  const [product, setProducts] = useState({});
  const [isInWishlistState, setIsInWishlistState] = useState(false);

  useEffect(() => {
    const singleData = data.find((product) => product.product_id == productId);
    setProducts(singleData);
    setIsInWishlistState(isInWishlist(singleData.product_id));
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

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    setIsInWishlistState(true);
  };

  const isInWishlist = (productId) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    return wishlist.some((item) => item.product_id === productId);
  };

  return (
    <div className="min-h-[600px]">
      <div className="bg-purple-700 mt-20 pb-64 relative  flex text-white flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="max-w-[750px] text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="absolute p-3 md:w-[1210px] bg-white rounded-3xl top-40 flex gap-5">
          <div>
            <img className="rounded-3xl h-[400px]" src={product_image} alt="" />
          </div>
          <div className="space-y-2">
            <h2 className="text-black text-xl font-semibold">{product_title}</h2>
            <h4 className="text-black">Price: ${price}</h4>
            <button className="btn btn-xs bg-green-300 border-green-600">
              {availability ? "In Stock" : "Out of Stock"}
            </button>
            <p className="text-black">{description}</p>
            <div>
              <h4 className="text-black font-semibold">Specification:</h4>
              <ul className="text-black">
                {Specification.map((item, index) => (
                  <li className="list-disc text-[#09080f99]" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <h2 className="text-black font-bold text-xl">Rating:</h2>
            <div className="flex ml-[-50px] gap-3 items-center justify-start">
              <dir>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
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
                </div>
              </dir>
              <div className="rating">
                <p className="text-black">{rating}</p>
              </div>
            </div>
            <div className="text-black flex items-center gap-3">
              <div
                onClick={() => handleAddToCart(product)}
                className="flex items-center btn text-white bg-purple-700 rounded-3xl"
              >
                <button>Add To Cart</button> <MdOutlineShoppingCart />
              </div>
              <button
                onClick={() => handleAddToWishlist(product)}
                className="btn rounded-3xl"
                disabled={isInWishlistState} // Disable if added to wishlist
              >
                <AiOutlineHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
