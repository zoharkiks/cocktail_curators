import { useRouter } from "next/router";
import React, { useContext } from "react";
import { images } from "../../constants";
import { Icon } from "@iconify/react";
import DrinksContext from "../../drinksContext";
import { ThreeDots } from  'react-loader-spinner'


const Details = () => {

const {details,loading} = useContext(DrinksContext)
const router = useRouter();



  
  return (
    <div className="grid grid-cols-2  md:flex flex-col	  ">
      {/* left side */}
      {loading ?<div className="flex flex-col justify-center items-center h-screen  ">
      <ThreeDots/>
        </div>: <div className="h-screen md:h-full">
        <img className="h-full object-cover md:h-1/2 md:w-full" src={details?.strDrinkThumb} alt="" />
      </div>}
      
      {/* right side */}
      <div className="flex flex-col items-center pt-[55px] sm:py-6 md:  ">
      <Icon onClick={()=>router.back()} className="h-10 w-10 cursor-pointer absolute right-5 top-5 md:hidden" icon="carbon:previous-filled" />

        <h1 className="font-worldwide text-center text-[64px] tracking-[4px] text-gray-dark sm:text-[50px]">
        {details?.strDrink}
        </h1>
        <div className="mt-5 mb-[20px] flex  sm:mt-2 items-center space-x-2 text-gray-text">
          <Icon
            className="h-[45px] w-[45px] text-gray-dark"
            icon="emojione-monotone:wine-glass"
          />
        <span className="font-poppins uppercase">{details?.strGlass}</span>
        </div>
        {/* Ingredients */}
        <div className="flex w-full flex-col justify-center px-[68px] lg:h-full sm:px-10">
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
                <span>{details?.strMeasure1}</span>
                <span>{details?.strIngredient1}</span>
              </div>
              <div className="flex space-x-4">
              <span>{details?.strMeasure2}</span>
                <span>{details?.strIngredient2}</span>
              </div>
              <div className="flex space-x-4">
              <span>{details?.strMeasure3}</span>
                <span>{details?.strIngredient3}</span>
              </div>
              <div className="flex space-x-4">
              <span>{details?.strMeasure4}</span>
                <span>{details?.strIngredient4}</span>
              </div>
              {details.strIngredient4?
              <div className="flex space-x-4">
              <span>{details?.strMeasure5}</span>
                <span>{details?.strIngredient5}</span>
              </div> : null}

              {details.strIngredient4?
              <div className="flex space-x-4">
              <span>{details?.strMeasure6}</span>
                <span>{details?.strIngredient6}</span>
              </div> : null}


            </div>
          </div>

          
          {/* Recipe */}
          <div className="mt-[10px] flex flex-col ">
            <h2 className="font-blooming text-[34px] tracking-[5px] text-gray-text">
              RECIPE
            </h2>
            <div className=" overflow-y-auto px-2 max-h-[10rem] scrollbar-thin scrollbar-thumb-orange scrollbar-track-gray-light scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
            <p className="mt-6 font-poppins text-sm leading-[26px] text-gray-text overflow-y-auto">
            {details?.strInstructions}
            </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
