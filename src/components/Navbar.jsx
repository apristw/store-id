import React from "react";

import Link from "next/link";
import NavItem from "./NavItem";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <div className="border-2 bg-white">
      <div className="max-w-[1440px] w-full p-5 h-24 mx-auto flex justify-between items-center space-x-7">
        <div className="w-1/2 flex items-center space-x-7">
          <Link href="/">
            <h1 className="font-black text-2xl">SHOP.ID</h1>
          </Link>
          <div className="">
            <NavItem />
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-between space-x-7">
          <div className="w-full">
            <InputSearch />
          </div>
          <div className="">
            <Link href="/login"> Login </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
