import React from "react";
import Banner from "./Banner";
import CategoryBtn from "./categoryBtn";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner/>
      <div className="flex">
        <CategoryBtn/>
        <Products/>
      </div>
    </div>
  );
};

export default Home;
