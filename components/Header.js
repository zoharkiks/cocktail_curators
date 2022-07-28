import React from "react";
import { Icon } from '@iconify/react';



const Header = () => {
  return (
    <div className="bg-[url('../assets/bg.png')] bg-contain  flex-col bg-top bg-no-repeat h-[85vh] space-y-[60px]  text-center flex items-center justify-start px-[139px] py-[70px]">
     <h1 className="text-[100px] font-blooming leading-none">Let's get you drunk</h1>
     <span className="font-poppins text-[40px] tracking-widest ">Start By Searching For Your Favourite Cocktails</span>
     <Icon className="text-[100px] text-gray-dark" icon="ph:wine" />

    </div>
  );
};

export default Header;
