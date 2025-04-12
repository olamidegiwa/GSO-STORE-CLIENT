import React from "react";

const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="text-white bg-gray-900 hover:text-gray-900 hover:bg-transparent  !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="border-2 text-gray-900 hover:text-white hover:bg-gray-900  !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className=" border-2  text-gray-900  hover:text-white hover:bg-gray-900 !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          rem perspiciatis, ipsum quod hic recusandae asperiores cumque earum
          voluptates eligendi aut veniam omnis quaerat natus provident
          cupiditate impedit numquam error, corrupti enim est repellat id dicta
          sapiente. Maxime obcaecati nostrum natus exercitationem explicabo,
          eligendi eum incidunt architecto quae voluptatem sequi laudantium
          quasi corrupti excepturi nemo.
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          mollitia aliquid fugiat fuga illum harum magnam esse, eaque, iste
          ducimus laudantium quod vitae porro dolorem voluptatum, pariatur
          repudiandae.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
