import React, { useContext, useState } from "react";
import { images } from "../constants";
import { clearInput } from "../helpers/clearInput";
import { useRouter } from "next/router";
import DrinksContext from "../drinksContext";
import Link from "next/link";
import { Icon } from "@iconify/react";

const styles = {
  navbar:
    "px-[42px] py-6 flex justify-between items-center tracking-[4px]   sm:pr-[42px]    ",
  navitems:
    "flex md:space-x-4 space-x-10 justify-center items-center font-blooming text-[24px]  sm:hidden   ",
  search:
    "flex border-2 border-gray-light rounded-[10px] px-4 py-1 outline-none tracking-[4px] w-[15rem] sm:hidden ",
  searchMob:
    "flex border-2 border-gray-light rounded-[10px] px-4 py-1 outline-none tracking-[2px] text-xs w-[75%]  ",
  link: "hover:border-b-2 hover:border-orange focus:outline-none",
  menuIcon: "w-8 h-8 hidden sm:block ",
  menu: "hidden  bg-orange/7e0 rounded-l-xl backdrop-blur-[10px]  py-6 px-4 h-[30rem] w-[75%] absolute top-[0px] right-[0px] z-10 sm:flex flex-col ",
  close: "flex justify-end items-center cursor-pointer",
  closeIcon: "w-5 h-5",
};

const Navbar = () => {
  const router = useRouter();

  const {setDrinks, fetchDrinks, searchTerm, setSearchTerm } = useContext(DrinksContext);

  // states
  const [menu, setMenu] = useState(false);

  const submitHandler = (e: any) => {
    setMenu(false)
    e.preventDefault();
    setDrinks([]);
    fetchDrinks(searchTerm);
    clearInput();
    router.push(`/search/${searchTerm}`);
  };

  return (
    <div className={styles.navbar}>
      {/* logo */}
      <div className="">
        <img src={images.logo.src} alt="" />
      </div>

      {/* navitems */}
      <div className={styles.navitems}>
        <Link href="/">
          <a className={styles.link}>DRINKS</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>ABOUT</a>
        </Link>

        <Link href="/contact">
          <a className={styles.link}>CONTACT ME</a>
        </Link>
      </div>

      {/* search */}
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className={styles.search}
            placeholder="SEARCH"
            onChange={(e) => setSearchTerm(e.target.value)}
            minLength={2}
          />
        </form>
      </div>

      <Icon
        onClick={() => setMenu(!menu)}
        className={styles.menuIcon}
        icon="ri:menu-5-fill"
      />

      {menu ? (
        <div className={styles.menu}>
          <div className={styles.close}>
            <Icon
              onClick={() => setMenu(!menu)}
              className={styles.closeIcon}
              icon="ep:close-bold"
            />
          </div>
          <div className="mt-20 flex flex-col space-y-10 ">
            <Link href="/">
              <a className={styles.link}>DRINKS</a>
            </Link>
            <Link href="/about">
              <a className={styles.link}>ABOUT</a>
            </Link>

            <Link href="/contact">
              <a className={styles.link}>CONTACT ME</a>
            </Link>
          </div>

          <form className="mt-10 flex justify-center" onSubmit={submitHandler}>
            <input
              type="text"
              className={styles.searchMob}
              placeholder="SEARCH"
              onChange={(e) => setSearchTerm(e.target.value)}
              minLength={2}
            />
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
