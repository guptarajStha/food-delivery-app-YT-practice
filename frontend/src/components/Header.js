import React from 'react';

const Header = () => {
  return (
    <div className='header h-[34vw] my-[30px] mx-auto bg-contain bg-no-repeat relative' style={{backgroundImage:`url('/header_img.png')`}}>
      <div className="header-content  absolute flex flex-col items-start bottom-[10%] left-[6vw] max-w-[50%]  gap-[1.3vw] animate-fadeIn">
        <h2 className='font-medium  text-[max(4.5vw,22px)]  text-white'>Order your favourite food here</h2>
        <p className='text-white text-[1vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa quidem repudiandae id accusantium sit eum ratione voluptatem eos asperiores laborum, consequatur velit magni veritatis, impedit rerum perferendis, sunt itaque?</p>
        <button className='bg-white  py-[1vw] px-[2.3vw] text-[#747474] rounded-full'>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
