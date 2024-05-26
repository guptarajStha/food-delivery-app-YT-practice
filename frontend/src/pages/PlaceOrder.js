import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order flex items-start  justify-between gap-[50px] mt-[100px]">
      <div className="place-order-left  w-[100%] max-w-[max(30%,500px)]">
        <p className="text-[30px] font-semibold mb-[50px]">
          Delivery Information
        </p>
        <div className="multi-fields flex gap-[10px]">
          <input
            className="w-full p-[10px] mb-[15px]  border-solid  border-[1px] border-[#c5c5c5] rounded-[4px]  outline-tomato"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full p-[10px] mb-[15px]  border-solid  border-[1px] border-[#c5c5c5] rounded-[4px]  outline-tomato"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="w-full p-[10px] mb-[15px]  border-solid  border-[1px] border-[#c5c5c5] rounded-[4px]  outline-tomato"
          type="email"
          placeholder="Email Adress"
        />
        <input
          className="w-full p-[10px] mb-[15px]  border-solid  border-[1px] border-[#c5c5c5] rounded-[4px]  outline-tomato"
          type="text"
          placeholder="Street"
        />
        <div className="multi-fields flex gap-[10px]">
          <input
            className="w-full p-[10px] mb-[15px]  border-solid  border-[1px] border-[#c5c5c5] rounded-[4px]  outline-tomato"
            type="text"
            placeholder="City"
          />
          <input
            className="w-full p-[10px] mb-[15px]  border-solid  border-[1px] border-[#c5c5c5] rounded-[4px]  outline-tomato"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input
            className="w-full p-[10px] mb-[15px]  border-solid  border-[1px] border-[#c5c5c5] rounded-[4px]  outline-tomato"
            type="text"
            placeholder="Zip Code"
          />
          <input
            className="w-full p-[10px] mb-[15px]  border-solid  border-[1px] border-[#c5c5c5] rounded-[4px]  outline-tomato"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="w-full p-[10px] mb-[15px]  border-solid  border-[1px] border-[#c5c5c5] rounded-[4px]  outline-tomato"
          type="text"
          placeholder="Phone Number"
        />
      </div>
      <div className="place-order-right w-full max-w-[max(40%,500px)]">
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
          <button className="text-white bg-tomato w-[max(15vw,200px)] py-[12px] rounded-[4px] mt-[30px]">
            Proceed to Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
