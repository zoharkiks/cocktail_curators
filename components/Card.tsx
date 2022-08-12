import React, { useContext } from "react";
import { useRouter } from "next/router";
import DrinksContext from "../drinksContext";
import Image from 'next/image'

const Card = ({
  img,
  title,
  id,
}: {
  img: string;
  title: string;
  id: number;
}) => {
  const router = useRouter();

  const handleClick = () => {
    fetchDetails(id);
    router.push(`/details/${title}`);
  };

  const { fetchDetails } = useContext(DrinksContext);

  return (
    <div>
      <div className="flex flex-col items-start justify-center  ">
        <div className="h-[271px] w-[209px]   ">
          <Image
            className="mb-3 h-full w-full object-cover cursor-pointer"
            src={img}
            alt="pic"
            onClick={handleClick}
            height={271}
            width={209}
            placeholder='blur'
            blurDataURL={img}
          />
          <span className="font-poppins text-lg font-medium text-orange">
            {title}
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
