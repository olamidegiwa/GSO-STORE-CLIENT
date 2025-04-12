import React from "react";
import { NavLink } from "react-router-dom";
import { MdContacts, MdHomeFilled, MdShop2, MdCategory } from "react-icons/md";
import zttw from "../assets/ZTTW_NEW_LOGO_PNG.avif";
import zara from "../assets/zara.png";
import hf from "../assets/hf.jpg";
const Navbar = ({ containerStyles, onLinkClick }) => {
  return (
    <nav style={{ alignItems: "center" }} className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        onClick={onLinkClick}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        <div className="flexCenter  gap-x-1 text-[16px] font-light text-gray-50">
          {" "}
          <MdHomeFilled /> Home
        </div>{" "}
      </NavLink>
      <NavLink
        to="/zttw"
        onClick={onLinkClick}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        <div className="flexCenter gap-x-1 text-[16px] font-light text-gray-50">
          {" "}
          <img src={zttw} alt="" height={32} width={32} /> ZTTW
        </div>{" "}
      </NavLink>
      <NavLink
        to="/hf"
        onClick={onLinkClick}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        <div className="flexCenter gap-x-1 text-[16px] font-light text-gray-50">
          {" "}
          <img src={hf} alt="" height={32} width={32} /> HF
        </div>{" "}
      </NavLink>
      <NavLink
        to="/zara"
        onClick={onLinkClick}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        <div className="flexCenter gap-x-1  text-[16px] font-light text-gray-50">
          {" "}
          <img src={zara} alt="" height={32} width={32} />
          ZARA
        </div>{" "}
      </NavLink>
    </nav>
  );
};

export default Navbar;
