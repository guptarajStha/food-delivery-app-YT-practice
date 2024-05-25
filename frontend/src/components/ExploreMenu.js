import React from "react";
import { menu_list } from "../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu flex flex-col gap-[20px]" id="explore-menu">
      <h1 className="font-medium text-[#262626] text-[34px]">
        Explore our menu
      </h1>
      <p className="text-[#808080] text-[14px] max-w-[100%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officia
        explicabo possimus, quis sunt ab voluptatem soluta numquam
        reprehenderit, doloremque, corporis iure modi. Enim voluptatum eligendi
        ullam consequuntur omnis? Unde.
      </p>
      <div className="explore-menu-list overflow-x-scroll  flex justify-between  items-center gap-[30px] text-center my-[20px] mx-0">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                );
              }}
              key={index}
            >
              <img
                className={` ${category===item.menu_name && ' border-4 border-solid border-[#e55e46] py-2px'} w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%]`}
                src={item.menu_image}
              />
              <p className="mt-[10px] text-[#747474] cursor-pointer text-[max(1.4vw,16px)]">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-[10px] mx-0  h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
