import React, { useState, useEffect } from "react";
import { getAllWishlistProducts, removeFromWishlist } from "../utility";

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

  return (
    <div className="md:w-[1280px] mx-auto mt-3 flex flex-col">
      <h2 className="text-2xl font-bold">Wishlist</h2>
      {wishlistProducts.length > 0 ? (
        wishlistProducts.map((product) => (
          <div key={product.product_id} className="flex justify-between">
            <div className='flex gap-3'>
                        <div>
                            <img className='w-32 h-28 rounded-lg' src={product.product_image} alt="" />
                        </div>
                        <div><h2 className='text-lg font-semibold'>{product.product_title}</h2>
                        <p>{product.description}</p>
                        <p className='text-md'>{product.price}$</p></div>
                        </div>
            <div>
              <button
                onClick={() => handleRemove(product.product_id)}
                className="btn"
              >
                Remove
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
