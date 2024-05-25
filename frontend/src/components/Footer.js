import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px]  mt-[100px]" id="footer">
      <div className="footer-content w-full grid grid-cols-custom gap-[80px]">
        <div className="footer-content-left flex flex-col  items-start gap-[20px]">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nesciunt facilis sequi quisquam ab beatae nulla corrupti itaque
            nostrum reprehenderit, maxime fuga dolorem consequatur nemo impedit,
            ipsa amet minus! Incidunt!
          </p>
          <div className="footer-social-icons flex ">
            <img className="w-[40px] mr-[15px]  cursor-pointer" src={assets.facebook_icon} alt="" />
            <img className="w-[40px] mr-[15px]  cursor-pointer" src={assets.twitter_icon} alt="" />
            <img className="w-[40px] mr-[15px]  cursor-pointer" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center flex flex-col  items-start gap-[20px]">
            <h2 className="font-medium text-white text-[24px]">COMPANY</h2>
            <ul>
                <li className=" cursor-pointer">Home</li>
                <li className=" cursor-pointer">About us</li>
                <li className=" cursor-pointer">Delivery</li>
                <li className=" cursor-pointer">Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right flex flex-col  items-start gap-[20px]">
            <h2 className="font-medium text-white text-[24px]">GET IN TOUCH</h2>
            <ul>
                <li>+1234567890</li>
                <li>something@email.com</li>
            </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] my-[20px] mx-[0px] bg-gray-600" />
      <p>Copyright 2024</p>
    </div>
  );
};

export default Footer;
