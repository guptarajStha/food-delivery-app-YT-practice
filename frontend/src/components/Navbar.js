import React,{useState} from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
  return (
    <div className='flex  py-[20px] justify-between items-center'>
      <img src={assets.logo} className='w-[150px]' />
      <ul className=' flex font-outfit  gap-[20px] text-[18px] text-[#49557e]'>
        <li onClick={()=>{setMenu('home')}} className={`${menu==="home" && ' pb-[2px] border-b-2 border-solid border-black'} cursor-pointer`}>home</li>
        <li onClick={()=>{setMenu('menu')}} className={`${menu==="menu" && ' pb-[2px] border-b-2 border-solid border-black'} cursor-pointer`}>menu</li>
        <li onClick={()=>{setMenu('mobile-app')}} className={`${menu==="mobile-app" && ' pb-[2px] border-b-2 border-solid border-black'} cursor-pointer`}>mobile-app</li>
        <li onClick={()=>{setMenu('contact-us')}} className={`${menu==="contact-us" && ' pb-[2px] border-b-2 border-solid border-black'} cursor-pointer`}>contact us</li>
      </ul>
      <div className='flex items-center gap-[40px]'>
        <img src={assets.search_icon} alt="" />
        <div className='nav-search-icon relative'>
            <img src={assets.basket_icon} alt="" />
            <div className=' absolute min-w-[10px] min-h-[10px]  bg-[#e55e46] rounded-3xl top-[-8px] right-[-8px]'></div>
        </div>
        <button className='py-[10px] px-[30px] text-[16px] border-[1px] rounded-[50px] cursor-pointer bg-transparent text-[#49557e] border-solid border-[#e55e46] transition duration-300 hover:bg-[#fff4f2]'>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
