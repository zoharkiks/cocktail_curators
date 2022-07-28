import Link from "next/link";
import React from "react";
import { images } from "../constants";
import Image from 'next/image'


const Header = () => {
  return (
    <div className="bg-[url('../assets/bg.png')] bg-contain  flex-col bg-top bg-no-repeat h-[85vh] space-y-10 flex items-center justify-start px-[139px] py-[70px]">
     <h1 className="text-[100px] font-blooming">Let's get you drunk</h1>
     <span className="font-poppins text-[40px]">Start by searching for your favourite cocktail</span>
    </div>
  );
};

export default Header;
