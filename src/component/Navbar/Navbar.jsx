import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { getAllProducts, getAllWishlistProducts } from '../../utility/index';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setCartCount(products.length); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchWishlist = async () => {
      try {
        const wishlist = await getAllWishlistProducts();
        setWishlistCount(wishlist.length);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchProducts();
    fetchWishlist();
  }, []);

  const isHomePage = location.pathname === "/";

  const link = (
    <>
      <li><NavLink to='/' className={`${isHomePage ? 'text-white' : 'text-gray-700'}`}>Home</NavLink></li>
      <li><NavLink to='/statistic' className={`${isHomePage ? 'text-white' : 'text-gray-700'}`}>Statistic</NavLink></li>
      <li><NavLink to='/dashboard' className={`${isHomePage ? 'text-white' : 'text-gray-700'}`}>Dashboard</NavLink></li>
      <li><NavLink to='/overview' className={`${isHomePage ? 'text-white' : 'text-gray-700'}`}>Review</NavLink></li>
    </>
  );

  return (
    <div className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-white'}`}>
      <div className="navbar md:w-[1280px] py-3 mx-auto">
        <div className="navbar-start">
          <Link to='/'><button className={`btn btn-ghost text-xl ${isHomePage ? 'text-white' : 'text-gray-700'}`}>Gadget Heaven</button></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-5">
          <Link to='/dashboard/cart'>
            <button className="relative text-2xl border p-2 rounded-full">
              <MdOutlineShoppingCart className={`${isHomePage ? 'text-white' : 'text-gray-700'}`} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">{cartCount}</span>
              )}
            </button>
          </Link>
          <button className="relative text-2xl border p-2 rounded-full">
            <AiOutlineHeart className={`${isHomePage ? 'text-white' : 'text-gray-700'}`} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">{wishlistCount}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
