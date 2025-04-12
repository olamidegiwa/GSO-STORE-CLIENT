import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { ShopContext } from "../Context/ShopContext";
import { BsCart3 } from "react-icons/bs";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <header className="fixed top-0 left-0 m-auto max-padd-container w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flexBetween place-items-center  py-3 max-xs:px-2">
        <div>
          <Link className="text-[16px] font-light text-gray-50">
            {" "}
            <span className="text-green-400">GSO</span>-STORE
          </Link>
        </div>
        <Navbar
          containerStyles={
            "hidden md:flex gap-x-5 xl:gap-x-10 medium-15 rounded-full px-2 py-1"
          }
        />
        <Navbar
          onLinkClick={() => setMenuOpened(false)}
          containerStyles={`
              ${
                menuOpened
                  ? "flex flex-col  items-start gap-y-12 fixed op-20 top-[8%] right-0 p-12 bg-white ounded-3xl shadow-md w-[50%]  medium-16 ring-1 ring-slate-900/5 transition-all duration-500 z-50"
                  : "flex flex-col  items-start gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50 -right-[100%]"
              }
            `}
        />
        <div className="flexBetween sm:gap-x-2 bold-16 ">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-green-400 mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full "
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden  cursor-pointer hover:text-green-400 mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full "
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween sm:gap-x-6">
            <NavLink to={"/cart-page"} className={"flex "}>
              <BsCart3 className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />{" "}
              <span className="relative flexCenter w-5 h-5 rounded-full bg-green-400 text-white medium-14 -top-2">
                {getTotalCartItems()}
              </span>
            </NavLink>
            {/* <NavLink
              to={"/logout"}
              className={
                "btn_secondary_rounded flexCenter rounded-3xl bg-green-400 text-white text-xs px-3 py-2 gap-x-2 medium-16"
              }
            >
              <img src={logout} alt="logoutIcon" height={19} width={19} />{" "}
              Logout
            </NavLink> */}
            <NavLink
              to={"/login"}
              className={
                "btn_secondary-rounded flexCenter rounded-3xl bg-green-400 text-white  px-3 py-2 gap-x-2  text-[16px] font-light"
              }
            >
              {" "}
              <FaRegUser /> Login
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
