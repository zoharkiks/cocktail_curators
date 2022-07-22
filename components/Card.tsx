import React from "react";
import {images} from "../constants";

const Card = () => {
  return (
    <div>
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
    </div>
  );
};

export default Card;
