import React from "react";
import Banner from "../component/Banner";
import CategoryBtn from "../component/CategoryBtn";
import Products from "../component/Products";
import { Outlet, useLoaderData } from "react-router-dom";
import ProductsCard from "../component/ProductsCard";
import { Helmet } from "react-helmet";

const Home = () => {
  const category = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven - Home</title>
        <meta
          name="description"
          content="Welcome to Gadget Heaven, your one-stop shop for all the latest gadgets."
        />
      </Helmet>
      <Banner />
      <div className="md:w-[1280px] mx-auto md:flex mt-[400px]">
        <CategoryBtn category={category} />
        <ProductsCard />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
