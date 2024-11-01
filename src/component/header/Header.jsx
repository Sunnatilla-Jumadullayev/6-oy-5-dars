import React from "react";
import logo from "../../assets/logo.svg";
import { HEADER__LIST } from "../../static";
import "./header.scss";

const Header = () => {
  let liItem = HEADER__LIST.map((item, key) => (
    <li className=" hover:text-red-600 font-semibold cursor-pointer" key={key}>
      {item}
    </li>
  ));
  return (
    <>
      <header className="container1 header mt-9 flex justify-between items-center ">
        <div className="flex gap-[40px] items-center">
          <img className="w-10 h-[44px]" src={logo} alt="logo.svg" />
          <ul className="flex gap-[40px] ">{liItem}</ul>
        </div>
        <button className="p-3 rounded-md text-white font-semibold bg-red-600 hover:bg-red-400">
          Booking now
        </button>
      </header>
    </>
  );
};

export default Header;
