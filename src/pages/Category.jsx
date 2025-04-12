import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import all_products from "../utils/allProduct";
import Item from "../components/Item";
import { NavLink } from "react-router-dom";

const Category = ({ category, banner }) => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Sort by");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setOpen(false);
    onSelect(category);
  };
  return (
    <section className="max-padd-container py-12 xl:py-28">
      <div>
        <div>
          <img src={banner} alt="" className="block my-7 mx-auto" />
        </div>
        <div className="flexBetween my-8 mx-2">
          <h5>
            <span className="font-light text-green-400">Showing 1-12</span> Out
            0f 36 Products
          </h5>
          <div>
            <div
              onClick={() => setOpen(!open)}
              className="flexBetween max-sm:p-4 gap-x-4 px-8 py-3 rounded-xl ring-1 ring-slate-900/15 cursor-pointer "
            >
              {selectedCategory} <MdOutlineKeyboardArrowDown />
            </div>
            {open && (
              <div className="flex flex-col gap-y-3 cursor-pointer rounded-xl ring-1 ring-slate-900/15 p-3 mt-2">
                <NavLink to={"/hf"} onClick={() => handleCategoryClick("HF")}>
                  HF
                </NavLink>
                <NavLink
                  to={"/zttw"}
                  onClick={() => handleCategoryClick("ZTTW")}
                >
                  ZTTW
                </NavLink>
                <NavLink
                  to={"/zara"}
                  onClick={() => handleCategoryClick("ZARA")}
                >
                  ZARA
                </NavLink>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-col-3 xl:grid-cols-4 gap-6 ">
          {all_products.map((item) => {
            if (category === item.category) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
          })}
        </div>

        <div className="mt-16 text-center">
          <button className=" bg-gray-90 text-white rounded-2xl px-5 py-2 text-base">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
