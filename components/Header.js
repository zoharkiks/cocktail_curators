import Link from "next/link";
import React from "react";
import { images } from "../constants";
import Image from 'next/image'


const Header = () => {
  return (
    <div className="bg-gra-dark flex items-center justify-between px-[139px] py-[70px]">
      {/* SLide 1 */}
      <div className="flex flex-col items-start justify-center">
        <div className="h-[271px] w-[209px] ">
          <div className="object-cover mb-3  ">
          <Image
            className=" "
            src={images.testimg.src}
            alt="pic"
            height={271}
            width={209}
            placeholder="blur"
            blurDataURL="default"
            
          />
          </div>
       
          <span className="font-poppins text-lg font-medium text-orange">
            Cuba Libre
          </span>

          <p className="mt-0.5 font-poppins text-sm font-normal text-gray-text">
            It calls for rum and Coke with lime, but within those three
            ingredients lies a synergy that has pleased palates for more than a
            century.
          </p>
        </div>
      </div>
      {/* SLide 2 */}
      <div className="b-[100px] flex flex-col items-start justify-center">
        <div className="h-[468px] w-[345px] ">
          <Link href={"/details/mojito"}>
            <img
              className="mb-3 h-full w-full object-cover"
              src="https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
              alt="pic"
            />
          </Link>
          <span className="font-poppins text-lg font-medium text-orange">
            Mojito
          </span>
          <p className="mt-0.5 font-poppins text-sm font-normal text-gray-text">
            Considered Cuba's national drink, this mojito cocktail is a favorite
            with pirates and colorful characters in the Caribbean and beyond.{" "}
          </p>
        </div>
      </div>
      {/* SLide 3 */}
      <div className="flex flex-col items-start justify-center ">
        <div className="h-[271px] w-[209px] ">
          <img
            className="mb-3 h-full w-full object-cover"
            src={images.testimg3.src}
            alt="pic"
          />
          <span className="font-poppins text-lg font-medium text-orange ">
            Daiquiri
          </span>
          <p className="mt-0.5 font-poppins text-sm font-normal text-gray-text">
            The daiquiri is a classic rum sour drink, and—much like the martini
            and margarita—it has also developed into a subfamily of drinks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
