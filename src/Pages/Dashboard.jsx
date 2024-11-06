import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getAllProducts } from "../utility";
import Cart from "../component/Cart";
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven - Dashboard</title>
        <meta
          name="description"
          content="Welcome to Gadget Heaven, your one-stop shop for all the latest gadgets."
        />
      </Helmet>
      <div className="bg-purple-700 py-2 mt-20 flex text-white flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="max-w-[750px] text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-3">
          <NavLink to="cart">
            <button className="btn">Cart</button>
          </NavLink>
          <NavLink to="wishlist">
            <button className="btn">Wishlist</button>
          </NavLink>
        </div>
      </div>

      <div></div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
