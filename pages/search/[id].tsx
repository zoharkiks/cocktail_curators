import React, { useContext, useEffect } from "react";
import { Navbar, Card } from "../../components";
import DrinksContext from "../../drinksContext";

const SearchResults = () => {
  const { drinks } = useContext(DrinksContext);

  return (
    <div className="h-screen bg-[url('../assets/bg.png')] bg-contain bg-center bg-no-repeat  ">
      {drinks === null ? (
        <div className="flex items-center justify-center">
          <h1 className=" p-[10rem] font-poppins text-3xl font-semibold">
            Sorry, we ran out of booze
          </h1>
        </div>
      ) : (
        <div className="mt-8 flex items-center justify-center font-blooming text-[24px] tracking-[4px] text-gray-text">
          <span>YOUR SEARCH RESULTS</span>
        </div>
      )}

      {/* Search Results */}
      <div className="grid grid-cols-3 place-items-center gap-y-40 px-[139px] py-[90px]">
        {drinks?.map((drink: any) => (
          <Card
            key={drink.idDrink}
            img={drink.strDrinkThumb}
            title={drink.strDrink}
            id={drink.idDrink}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
