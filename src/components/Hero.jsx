import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-center bg-cover bg-no-repeat h-screen w-full my-14 ">
      <div className="max-padd-container relative top-32  xs:top-52">
        <h1 className="h12 text-green-400 bg-black/50 p-4 capitalize max-w-[37rem] text-start">
          Fashion Made Easy
          <br />
          Trendy. Affordable. Delivered.
        </h1>
        <p className="text-white bg-black/50 regular-16 mt-6 max-w-[33rem] text-start p-4">
          Explore our curated collections from top brands like HF, ZARA, and
          ZTTW. Whether you're shopping for timeless basics, seasonal trends, or
          statement pieces, we’ve got you covered. Don’t miss our new arrivals
          and exclusive offers!
        </p>
        {/* <div className="flexStart !items-center gap-x-4 my-10">
          <div className="!regular-24 flexCenter gap-x-3 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="bold-16 sm:bold- text-white">
            176k{" "}
            <span className="regular-16 sm:regular-20">Excellent Reviews</span>
          </div>
        </div> */}
        <div className="max-xs:flex-col flex gap-2 py-6">
          <NavLink to={""} className={"btn-dark rounded-2xl flexCenter "}>
             <p className="text-green-400 uppercase">  Shop now</p>
          </NavLink>
          <NavLink
            to={""}
            className={"btn-dark rounded-2xl flexCenter gap-x-2"}
          >
            {" "}
            <MdOutlineLocalOffer className="text-2xl text-gray-50" />
          <p className="text-green-400 uppercase">  Offers</p>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
