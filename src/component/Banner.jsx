import React from "react";
import bannerImg from "../assets/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="border-2 rounded-3xl p-2 w-11/12 mx-auto">
        <div className="hero  rounded-3xl md:pb-64 bg-[#9538E2]">
          <div className="hero-content text-center relative pt-20">
            <div className="max-w-[1120px] text-white">
              <h1 className="text-5xl font-bold">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="py-6 md:w-2/3 mx-auto">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <Link to="/dashboard">
                <button className="btn bg-white text-black rounded-3xl">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="absolute flex rounded-[40px] items-center border-2 justify-center top-[360px]">
              <img
                className="w-full h-[500px] p-4 rounded-[40px]"
                src={bannerImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
