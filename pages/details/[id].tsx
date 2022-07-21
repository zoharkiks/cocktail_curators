import React from "react";
import { images } from "../../constants";
import { Icon } from "@iconify/react";

const Details = () => {
  return (
    <div className="grid grid-cols-2 	  ">
      {/* left side */}
      <div className="h-screen bg-cover">
        <img className="h-full" src={images.testimg2.src} alt="" />
      </div>
      {/* right side */}
      <div className="flex flex-col items-center pt-[55px] ">
        <h1 className="font-worldwide text-[64px] tracking-[4px] text-gray-dark">
          Mojito
        </h1>
        <div className="mt-5 mb-[70px] flex  items-center space-x-2 text-gray-text">
          <Icon
            className="h-[45px] w-[45px] text-gray-dark"
            icon="emojione-monotone:wine-glass"
          />
          <span className="font-poppins uppercase">Cocktail Glass</span>
        </div>
        {/* Ingredients */}
        <div className="flex w-full flex-col justify-center px-[68px]">
          <h2 className="font-blooming text-[34px] tracking-[5px] text-gray-text">
            INGREDIENTS
          </h2>

          <div className="mt-8  flex font-poppins text-sm text-gray-text ">
            <div className="flex-flex-col  py-4">
              <div className="h-[100%] w-[2px] bg-orange "></div>
            </div>
            {/* Individual Ingredients */}
            <div className="ml-6 flex flex-col space-y-4 ">
              <div className="flex space-x-4">
                <span>1</span>
                <span>Cherries</span>
              </div>
              <div className="flex space-x-4">
                <span>2</span>
                <span>Lemon</span>
              </div>
              <div className="flex space-x-4">
                <span>2</span>
                <span>Lemon</span>
              </div>
            </div>
          </div>

          
          {/* Recipe */}
          <div className="mt-[70px] flex flex-col ">
            <h2 className="font-blooming text-[34px] tracking-[5px] text-gray-text">
              RECIPE
            </h2>
            <p className="mt-6 font-poppins text-sm leading-[26px] text-gray-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
