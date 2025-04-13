import React from "react";
import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";
const ProductHd = (props) => {
  const { product } = props;
  return (
    <div className="flex items-center flex-wrap gap-x-2 medium-16 my-4 capitalize">
      <Link to={"/"} className="cursor-pointer">Home</Link> <TbArrowRight /> Shop <TbArrowRight />{" "}
      {product.category} <TbArrowRight /> {product.name}
    </div>
  );
};

export default ProductHd;
