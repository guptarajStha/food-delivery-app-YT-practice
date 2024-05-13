import React from "react";
import { assets } from "../assets/assets";
const FoodItem = ({ name, id, image, price, description }) => {
  return (
    <div className="">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
