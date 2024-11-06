import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

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

      {/* Dashboard Header Section */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 py-10 mt-20 flex flex-col items-center text-white gap-4">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="max-w-xl text-center text-lg">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <NavLink
            to="cart"
            className={({ isActive }) =>
              isActive
                ? "px-6 py-2 bg-white text-purple-700 rounded-lg font-semibold shadow"
                : "px-6 py-2 text-white bg-purple-700 rounded-lg font-semibold shadow hover:bg-purple-600 transition duration-300"
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="wishlist"
            className={({ isActive }) =>
              isActive
                ? "px-6 py-2 bg-white text-purple-700 rounded-lg font-semibold shadow"
                : "px-6 py-2 text-white bg-purple-700 rounded-lg font-semibold shadow hover:bg-purple-600 transition duration-300"
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>

      {/* Outlet for Nested Routes */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
