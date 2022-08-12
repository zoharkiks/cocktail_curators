import React, { useContext, useEffect } from "react";
import { Card } from "../../components";
import DrinksContext from "../../drinksContext";
import Layout from "../../components/layout";
import { ThreeDots } from "react-loader-spinner";

const SearchResults = () => {
  const { drinks, loading } = useContext(DrinksContext);

  return (
    <Layout>
      <div className="h-[85vh] bg-[url('../assets/bg.png')] bg-contain bg-top  bg-repeat-y  ">
        {drinks === null && !loading ? (
          <div className="flex items-center justify-center">
            <h1 className=" p-[10rem] font-poppins text-3xl font-semibold">
              Sorry, we ran out of booze
            </h1>
          </div>
        ) : drinks?.length == 0 ? null : (
          <div className="flex  items-center justify-center pt-8 font-blooming text-[30px] tracking-[4px] text-gray-text">
            <span>YOUR SEARCH RESULTS</span>
          </div>
        )}
        {loading && (
          <div className="flex h-[50vh] flex-col items-center justify-center">
            <ThreeDots />
          </div>
        )}

        {/* Search Results */}
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-y-[7rem]  place-items-center lg:gap-x-20 gap-y-40 px-[139px] py-[60px]  lg:px-[100px]">
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
    </Layout>
  );
};

export default SearchResults;
