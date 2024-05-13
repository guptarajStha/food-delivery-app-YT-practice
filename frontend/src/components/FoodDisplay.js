import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display mt-[30px]">
      <h2 className="text-[max(2vw,24px)] font-semibold">Top dishes near me</h2>
      <div className="food-display-list gap-y-[50px] grid grid-cols-auto-fill-240 mt-[30px] gap-[30px]">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
