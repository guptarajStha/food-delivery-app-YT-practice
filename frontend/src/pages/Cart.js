import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount, } = useContext(StoreContext);
  const navigate = useNavigate()
  return (
    <div className="cart mt-[100px]">
      <div className="cart-items">
        <div className="cart-item-title grid grid-cols-custom1 items-center text-grey text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title car-items-item  grid grid-cols-custom1 items-center  text-[max(1vw,12px)] my-[10px] mx-[0px] text-black">
                  <img className="w-[50px]" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className=" cursor-pointer">x</p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2]" />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom mt-[80px] flex-col-reverse md:flex-row  flex justify-between gap-[max(12vw,20px)]">
        <div className="cart-total flex flex-1 flex-col gap-[20px]">
          <h2 className=" text-[30px] font-bold">Cart Total</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#55]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#55]">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?<>${0}</>:<>${2}</>}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#55]">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?<>${0}</>:<>${getTotalCartAmount() + 2}</>}</b>
            </div>
          </div>
          <button className="text-white bg-tomato w-[max(15vw,200px)] py-[12px] rounded-[4px]" onClick={()=>navigate('/order')}>Proceed to Checkout</button>
        </div>
        <div className="cart-promo-code justify-start flex-1 ">
          <div>
            <p className="text-[#555]">If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
              <input className=" bg-transparent pl-[10px] outline-none" type="text" placeholder="Promo Code" />
              <button className="w-[max(10vw,150px)] py-[12px] px-[5px] bg-black text-white rounded-[4px]">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
