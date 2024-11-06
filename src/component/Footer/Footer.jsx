import React from "react";

const Footer = () => {
  return (
    <div className="bg-white mt-8">
      <footer className="footer md:w-[1280px] gap-3 mx-auto flex flex-col items-center text-black p-10 space-y-2">
        <div className="text-center md:w-[1280px] flex flex-col border-b items-center justify-center">
          <h1 className="text-3xl font-semibold">Gadget Heaven</h1>
          <p className="mb-4">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>

        <div className="w-full flex text-[#09080f99]  flex-wrap justify-around">
          <nav className="flex flex-col  text-center">
            <h6 className="footer-title text-black">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col text-center">
            <h6 className="footer-title text-black">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col  text-center">
            <h6 className="footer-title text-black">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
