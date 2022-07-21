import React from "react";
import { images } from "../constants";

const Header = () => {
  return (
    <div className="bg-gra-dark flex items-center justify-between px-[139px] py-[90px]">
      {/* SLide 1 */}
      <div className="flex flex-col items-start justify-center">
        <div className="h-[271px] w-[209px] ">
          <img
            className="mb-3 h-full w-full object-cover"
            src={images.testimg.src}
            alt="pic"
          />
          <span className="font-poppins text-lg font-medium text-orange">
            Cuba Libre
          </span>

          <p className="mt-0.5 font-poppins text-sm font-normal text-gray-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      {/* SLide 2 */}
      <div className="flex flex-col items-start justify-center">
        <div className="h-[468px] w-[345px] ">
          <img
            className="mb-3 h-full w-full object-cover"
            src={images.testimg2.src}
            alt="pic"
          />
          <span className="font-poppins text-lg font-medium text-orange">
            Mojito
          </span>
          <p className="mt-0.5 font-poppins text-sm font-normal text-gray-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
