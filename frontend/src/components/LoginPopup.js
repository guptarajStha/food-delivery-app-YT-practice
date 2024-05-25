import React, { useState } from "react";
import { assets } from "../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup absolute z-10 w-[100%] h-[100%] bg-[#00000090] grid">
      <form className="login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col text-[14px] rounded-[8px] animate-fadeIn gap-[25px] p-6">
        <div className="login-popup-title flex justify-between items-center text-black">
          <h2 className="text-[30px] font-medium">{currState}</h2>
          <img className=" cursor-pointer" onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-popup-input flex flex-col gap-[20px]">
          {currState === "Sign Up" && (
            <input className=" border-[#c9c9c9] rounded-[4px] border-2 p-[10px]" type="text" placeholder="Your Name" required />
          )}
          <input className=" border-[#c9c9c9] rounded-[4px] border-2 p-[10px]" type="email" placeholder="Your Email" required />
          <input className=" border-[#c9c9c9] rounded-[4px] border-2 p-[10px]" type="password" placeholder="Password" required />
        </div>
        <button className=" p-[10px] bg-tomato text-white rounded-[4px] text-[15px] cursor-pointer ">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition flex items-start gap-[8px] mt-[-15px]">
          <input className="mt-[5px]" type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span className="text-tomato font-medium cursor-pointer" onClick={()=>setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account <span className="text-tomato font-medium cursor-pointer" onClick={()=>setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
