import React,{useState} from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");
  return (
    <div className='flex  py-[20px] justify-between items-center '>
      <img src={assets.logo} className='w-[120px] lg:w-[140px]' />
      <ul className='hidden md:flex font-outfit md:gap-[15px]  lg:gap-[20px] md:text-[15px] lg:text-[18px] text-[#49557e]'>
        <Link to='/' onClick={()=>{setMenu('home')}} className={`${menu==="home" && ' pb-[2px] border-b-2 border-solid border-black'} cursor-pointer`}>home</Link>
        <a href='#explore-menu' onClick={()=>{setMenu('menu')}} className={`${menu==="menu" && ' pb-[2px] border-b-2 border-solid border-black'} cursor-pointer`}>menu</a>
        <a href='#mobile-app' onClick={()=>{setMenu('mobile-app')}} className={`${menu==="mobile-app" && ' pb-[2px] border-b-2 border-solid border-black'} cursor-pointer`}>mobile-app</a>
        <a href='#footer' onClick={()=>{setMenu('contact-us')}} className={`${menu==="contact-us" && ' pb-[2px] border-b-2 border-solid border-black'} cursor-pointer`}>contact us</a>
      </ul>
      <div className='flex items-center gap-[20px] lg:gap-[30px]'>
        <img className='lg:w-[22px] w-[20px]' src={assets.search_icon} alt="" />
        <div className='nav-search-icon relative'>
            <img className='lg:w-[22px] w-[20px]'  src={assets.basket_icon} alt="" />
            <div className=' absolute min-w-[10px] min-h-[10px]  bg-[#e55e46] rounded-3xl top-[-8px] right-[-8px]'></div>
        </div>
        <button className='py-[10px] px-[30px] md:text-[15px] md:py-[7px] md:px-[20px] lg:py-[8px] lg:px-[25px] text-[16px] border-[1px] rounded-[50px] cursor-pointer bg-transparent text-[#49557e] border-solid border-[#e55e46] transition duration-300 hover:bg-[#fff4f2]' onClick={()=>{setShowLogin(true)}}>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
