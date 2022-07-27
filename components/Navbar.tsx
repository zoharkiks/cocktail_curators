import React, { useContext, useState } from "react";
import { images } from "../constants";
import { clearInput } from "../helpers/clearInput";
import { useRouter } from "next/router";
import DrinksContext from "../drinksContext";

const styles = {
  navbar:
    "pl-[42px] py-6 flex justify-between items-center tracking-[4px] pr-[100px]  ",
  navitems:
    "flex space-x-10 justify-center items-center font-blooming text-[24px]  ",
  search:
    "flex border-2 border-gray-light rounded-[10px] px-4 py-1 outline-none tracking-[4px] w-[15rem] ",
  link: "hover:border-b-2 hover:border-orange focus:outline-none",
};

const Navbar = () => {
  const router = useRouter();

  const {fetchDrinks,searchTerm, setSearchTerm}  = useContext(DrinksContext);

  const submitHandler = (e: any) => {
    e.preventDefault();
    fetchDrinks(searchTerm);
    clearInput();
    router.push(`/search/${searchTerm}`);
  };

  return (
    <div className={styles.navbar}>
      {/* logo */}
      <div className="">
        <img
          src={images.logo.src}
          alt=""
        />
      </div>

      {/* navitems */}
      <div className={styles.navitems}>
        <a className={styles.link} href="">
          DRINKS
        </a>
        <a className={styles.link} href="">
          ABOUT
        </a>
        <a className={styles.link} href="">
          CONTACT ME
        </a>
      </div>

      {/* search */}
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className={styles.search}
            placeholder="SEARCH"
            onChange={(e) => setSearchTerm(e.target.value)}
            minlength={2}
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
