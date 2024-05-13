import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
const FoodItem = ({ name, id, image, price, description }) => {
  const [itemCount, setItemCount] = useState(0);
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
    return (
    <div className="food-item w-full m-auto rounded-[15px] shadow-custom  duration-[0.3sec] animate-fadeIn-1">
      <div className="image-container relative">
        <img className="w-full rounded-t-[15px]" src={image} alt="" />
        {!cartItems[id] ? (
          <img className="w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]"
            onClick={() => {
              addToCart(id)
            }}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="flex absolute bottom-[15px] right-[15px] items-center gap-[10px] p-[6px] rounded-[50px] bg-white">
            <img className="w-[30px] cursor-pointer" onClick={()=>{removeFromCart(id)}} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img className="w-[30px] cursor-pointer" onClick={()=>{addToCart(id)}} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info p-[20px]">
        <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
          <p className="font-medium text-[20px]">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description text-[#676767] text-[12px]">
          {description}
        </p>
        <p className="food-item-price text-[22px] text-tomato font-medium mt-[10px] ">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
