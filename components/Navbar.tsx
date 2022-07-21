import React from "react";
import { images } from "../constants";

const styles = {
  navbar:
    "pl-[42px] py-6 flex justify-between items-center tracking-[4px] pr-[100px]  ",
  navitems:
    "flex space-x-10 justify-center items-center font-blooming text-[24px]  ",
  search:
    "flex border-2 border-gray-light rounded-[10px] px-4 py-1 outline-none tracking-[4px] w-[15rem] ",
    link:"hover:border-b-2 hover:border-orange focus:outline-none",
};

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* logo */}
      <div className="">
        <img src={images.logo.src} alt="" />
      </div>

      {/* navitems */}
      <div className={styles.navitems}>
        <a className={styles.link} href="">DRINKS</a>
        <a className={styles.link} href="">ABOUT</a>
        <a  className={styles.link} href="">CONTACT ME</a>
      </div>

      {/* search */}
      <div >
        <input className={styles.search} placeholder="SEARCH" />
      </div>
    </div>
  );
};

export default Navbar;
