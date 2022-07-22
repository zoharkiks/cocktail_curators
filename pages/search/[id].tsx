import React from "react";
import { images } from "../../constants";
import { Navbar, Card } from "../../components/";

const SearchResults = () => {
  return (
    <div className="h-screen bg-[url('../assets/bg.png')] bg-contain bg-center bg-no-repeat ">
      <Navbar />

      <div className="flex items-center justify-center font-blooming text-[24px] tracking-[4px] text-gray-text mt-8">
        <span>YOUR SEARCH RESULTS</span>
      </div>

      {/* Search Results */}
      <div className="grid grid-cols-3 place-items-center gap-y-40 px-[139px] py-[90px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default SearchResults;
