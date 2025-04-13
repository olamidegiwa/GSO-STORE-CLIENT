import React, { useEffect, useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import all_products from "../utils/allProduct";
import Item from "../components/Item";
import { NavLink, useNavigate } from "react-router-dom";

const Category = ({ category, banner }) => {
  const [open, setOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Sort");

  const [filterOpen, setFilterOpen] = useState(false);
  const [selected, setSelected] = useState("Filter");

  const navigate = useNavigate();

  const sortOptions = ["A-Z", "Z-A", "New", "Old", "Best Selling"];
  const handleSortChange = (sortType) => {
    setSelectedSort(sortType);
    setOpen(false);
  };

  const selectOptions = ["HF", "ZARA", "ZTTW"];
  const handleSelectedChange = (selectType) => {
    setSelected(selectType);
    setFilterOpen(false);
    navigate(`/${selectType.toLowerCase()}`);
  };

  return (
    <section className="max-padd-container py-12 xl:py-28">
      <div>
        <div>
          <img src={banner} alt="bannerImg" className="block my-7 mx-auto" />
        </div>
        <div className="flexBetween my-8 mx-2">
         <div className="relative">
         <div
            onClick={() => setFilterOpen(!filterOpen)}
            className="flexBetween gap-x-2 font-light text-gray-500 cursor-pointer"
          >
            {selected}
            {filterOpen ? <LuMinus /> : <LuPlus />}
          </div>
          {filterOpen && (
            <div className="flex flex-col gap-y-3 cursor-pointer  ring-1 ring-slate-900/15 text-gray-500 p-3 absolute left-[5%] top-10 z-10">
              <ul className="text-start list-disc pl-5 space-y-2 font-light text-decoration">
                {selectOptions.map((data) => {
                  return (
                    <li key={data} onClick={() => handleSelectedChange(data)}>
                      {data}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
         </div>
          <div>
            <div
              onClick={() => setOpen(!open)}
              className="flexBetween  gap-x-2 px-4 py-3 rounded-xl font-light text-gray-500 cursor-pointer "
            >
              {selectedSort}
              {open ? <LuMinus /> : <LuPlus />}
            </div>
            {open && (
              <div className="flex flex-col gap-y-3 cursor-pointer  ring-1 ring-slate-900/15 text-gray-500 p-3 ">
                <ul className="text-start list-disc pl-5 space-y-2 font-light text-decoration">
                  {sortOptions.map((option) => {
                    return (
                      <li key={option} onClick={() => handleSortChange(option)}>
                        {option}
                      </li>
                    );
                  })}
                </ul>
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

        {/* <div className="mt-16 text-center">
          <button className=" bg-gray-90 text-white rounded-2xl px-5 py-2 text-base">
            Load More
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Category;
