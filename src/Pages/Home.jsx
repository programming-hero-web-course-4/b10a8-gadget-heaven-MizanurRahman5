import React from "react";
import Banner from "../component/Banner";
import CategoryBtn from "../component/CategoryBtn";
import Products from "../component/Products";
import { Outlet, useLoaderData } from "react-router-dom";
import ProductsCard from "../component/ProductsCard";

const Home = () => {
    const category = useLoaderData()
  return (
    <div>
      <Banner/>
      <div className="md:w-[1280px] mx-auto flex mt-[500px]">
        <CategoryBtn category={category}/>
        <ProductsCard/>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
