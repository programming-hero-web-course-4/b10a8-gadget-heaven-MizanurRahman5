import React, { useState, useEffect } from "react";
import {
  addToCart,
  getAllWishlistProducts,
  removeFromWishlist,
} from "../utility";
import { TiDeleteOutline } from "react-icons/ti";

const Wishlist = () => {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    const products = getAllWishlistProducts();
    setWishlistProducts(products);
  }, []);

  const handleRemove = (productId) => {
    removeFromWishlist(productId);
    setWishlistProducts((prevProducts) =>
      prevProducts.filter((product) => product.product_id !== productId)
    );
  };
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="md:w-[1280px] mx-auto mt-3 flex flex-col">
      <h2 className="text-2xl font-bold">Wishlist</h2>
      {wishlistProducts.length > 0 ? (
        wishlistProducts.map((product) => (
          <div
            key={product.product_id}
            className="flex gap-3 mb-2 p-3 bg-white rounded-lg items-center justify-between border-b py-4"
          >
            <div className="flex gap-3">
              <div>
                <img
                  className="w-32 h-28 rounded-lg"
                  src={product.product_image}
                  alt=""
                />
              </div>
              <div className="">
                <h2 className="text-lg font-semibold">
                  {product.product_title}
                </h2>
                <p>{product.description}</p>
                <p className="text-md">Price : ${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn border-purple-600 hover:bg-purple-700 hover:text-white rounded-3xl"
                >
                  Add to Card
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleRemove(product.product_id)}
                className=" text-5xl text-red-600 cursor-pointer"
              >
                <TiDeleteOutline />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No products in wishlist</p>
      )}
    </div>
  );
};

export default Wishlist;
