import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <section className="max-padd-container pt-28 overflow-hidden">
      <div className="w-full overflow-x-scroll">
        <table className="w-full mx-auto">
          <thead>
            <tr className="bg-slate-900/10 regular-18 sm:regular-22 text-start py-12 ">
              <th className="p-1 py-2">Products</th>
              <th className="p-1 py-2">Title</th>
              <th className="p-1 py-2">Price</th>
              <th className="p-1 py-2">Quantity</th>
              <th className="p-1 py-2">Total</th>
              <th className="p-1 py-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <tr
                    key={e.id}
                    className="border-b border-slate-900/20 text-gray-30 p-6 medium-14 text-center"
                  >
                    <td className="flexCenter ">
                      <img
                        src={e.image}
                        alt="prdctImg"
                        height={43}
                        width={43}
                        className="rounded-lg ring-1 ring-slate-900/5 my-1"
                      />
                    </td>
                    <td>
                      <div className="line-clamp-3">{e.name}</div>
                    </td>
                    <td>${e.new_price}</td>
                    <td>{cartItems[e.id]}</td>
                    <td className="w-16 h-16 bg-white">
                      ${e.new_price * cartItems[e.id]}
                    </td>
                    <td>
                      <div className="bold-32 pl-14">
                        <TbTrash onClick={() => removeFromCart(e.id)} />
                      </div>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-white w-full max-w-[666px]">
        <div className="flex flex-col gap-10">
          <h4 className="bold-20">Summary</h4>
          <div>
            <div className="flexBetween py-4">
              <h4 className="medium-16">Subtotal:</h4>
              <h4 className="text-gray-30 font-semibold">
                ${getTotalCartAmount()}
              </h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="medium-16 ">Shipping Fee:</h4>
              <h4 className="text-gray-30 font-semibold">Free</h4>
            </div>
            <hr />
            <div className="flexBetween py-4 ">
              <h4 className="bold-18">Total:</h4>
              <h4 className="bold-18">${getTotalCartAmount()}</h4>
            </div>
          </div>
          <button className="w-44 text-white bg-gray-900 text-sm rounded-2xl py-2 ">
            Checkout
          </button>
          <div className="flex flex-col gap-10">
            <h4 className="bold-20 capitalize">Your Coupon Code Enter Here</h4>
            <div className="flexBetween pl-5  bg-primary rounded-full ring-1 ring-slate-900/10">
              <input
                type="text"
                placeholder="Coupon Code"
                className="bg-transparent border-none outline-none"
              />
              <button className="text-white bg-gray-900 text-sm rounded-2xl py-2 px-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
