import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar bg-[#1E2952] text-white relative">
      <div className="cont flex justify-start w-full p-2 space-x-2">
        <img src={logo} alt="" className="w-6 rounded-3xl" />
        <span className="text-sm font-bold mt-1 ">Cryptotracker</span>
        <ul className="text-xs flex justify-center space-x-3  mt-[6px] font-bold">
          <li></li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cryptocurrencies">Cryptocurriences</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;