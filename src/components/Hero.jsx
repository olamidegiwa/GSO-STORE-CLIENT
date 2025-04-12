import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-center bg-cover bg-no-repeat h-screen w-full my-14 ">
      <div className="max-padd-container relative top-32  xs:top-52">
        <h1 className="h1 text-green-400 capitalize max-w-[37rem]">
          Digital Shopping Hub Junction
        </h1>
        <p className="text-white regular-16 mt-6 max-w-[33rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, non
          officia. Iusto quis velit obcaecati pariatur doloribus nihil excepturi
          qui blanditiis sed autem. Totam autem optio in vel! Ducimus temporibus
          porro quos dolores illo labore deleniti debitis, magnam quisquam. Qui
          distinctio sequi officiis ad illo. Blanditiis sit delectus ad earum?
        </p>
        <div className="flexStart !items-center gap-x-4 my-10">
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
        </div>
        <div className="max-xs:flex-col flex gap-2">
          <NavLink to={""} className={"btn-dark rounded-2xl flexCenter "}>
            Shop now
          </NavLink>
          <NavLink
            to={""}
            className={"btn-dark rounded-2xl flexCenter gap-x-2"}
          >
            {" "}
            <MdOutlineLocalOffer className="text-2xl" />
            Offers
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
