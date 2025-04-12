import React, { useContext } from "react";
// import product1 from "../assets/product_rt_1.avif";
// import product2 from "'../assets/product_rt_4.avif";
// import product3 from "../assets/product_rt_3.avif";
// import product4 from "../assets/product_rt_4.avif";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <section className="">
      <div className="flex flex-col  xl:flex-row gap-14">
        {/* left Slide */}
        <div className="flex gap-x-2 xl:flex-1">
          {/* <div className="flex flex-col gap-[7px] flex-wrap">
            <img
              src="https://cdn.shopify.com/s/files/1/0293/9277/products/04-18-23Studio2_KJ_RL_14-10-46_5_ZDDR0301_Black_P_16671_MP.jpg?v=1682008984&width=600&height=900&crop=center"
              alt="prdctImg"
              className="max-h-[99px] "
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0293/9277/products/04-18-23Studio2_KJ_RL_14-11-10_5_ZDDR0301_Black_P_16672_MP.jpg?v=1682008984&width=600&height=900&crop=center"
              alt="prdctImg"
              className="max-h-[99px]"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0293/9277/products/04-18-23Studio2_KJ_RL_14-11-10_5_ZDDR0301_Black_P_16672_MP.jpg?v=1682008984&width=600&height=900&crop=center"
              alt="prdctImg"
              className="max-h-[99px]"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0293/9277/files/04-27-23Studio4_KF_AP_14-56-42_61_ZDDR0301_Black_P_28180_PLUS_PXF.jpg?v=1737659488&width=600&height=900&crop=center"
              alt="prdctImg"
              className="max-h-[99px]"
            />
          </div> */}

          <div>
            <img src={product.image} alt="" />
          </div>
        </div>
        {/* right side */}

        <div className="flex flex-col  xl:flex-[1.7]">
          <h3 className="h3">{product.name}</h3>
          <div className="flex gap-x-2 text-secondary medium-22">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p>(111)</p>
          </div>
          <div className="flex gap-x-6 medium-20 my-4">
            <div className="line-through">{product.old_price}</div>
            <div className="text-secondary">{product.new_price}</div>
          </div>
          <div className="mb-4">
            <h4 className="bold-16">Select Sizes</h4>
            <div className="flex gap-3 my-3  ">
              <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer">
                S
              </div>
              <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">
                M
              </div>
              <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">
                L
              </div>
              <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">
                XL
              </div>
            </div>

            <div className="flex flex-col gap-y-3 mb-4 max-w-[550px]">
              <button
                onClick={() => {
                  addToCart(product.id);
                }}
                className="border !rounded-none uppercase regular-14 tracking-widest  text-gray-50 text-base w-full py-2"
              >
                Add to Cart
              </button>
              <button className=" !rounded-none uppercase regular-14 tracking-widest  bg-gray-50 text-white w-full py-2">
                Buy it Now
              </button>
            </div>
            <p>
              <span className="medium-16 text-tertiary">Category:</span>HF |
              ZTTW | ZARA{" "}
            </p>
            <p>
              <span className="medium-16 text-tertiary">Tags:</span>Modern |
              Latest{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
