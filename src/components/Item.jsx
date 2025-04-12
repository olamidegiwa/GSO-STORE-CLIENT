import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, old_price, new_price }) => {
  // const Item = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:4000/allproducts");
        const data = await res.json();
        console.log("Fetched products:", data.products);
        // if (data.success && Array.isArray(data.products)) {
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div className="relative flexCenter group overflow-hidden transition-all duration-100">
        <Link
          to={`/product/${id}`}
          className="h-12 w-12 bg-white rounded-full flexCenter absolute top-1/2 bottom-1/2 !py-2 z-20 scale-0 group-hover:scale-100  transition-all duration-700 "
        >
          <FaSearch className="hover:rotate-90 scale-125 transition-all duration-200" />
        </Link>
        <img
          onClick={window.scrollTo(0, 0)}
          src={image}
          alt="productImage"
          className="w-full block object-cover group-hover:scale-110 transition-all duration-1000 "
        />
      </div>
      <div className="p-4 overflow-hidden">
        <h4 className="my-[6px] medium-16 line-clamp-2 text-gray-30">{name}</h4>
        <div className="flex gap-5">
          <div className="bold-16 ">{new_price}.00</div>
          <div className="text-secondary bold-16 line-through">
            {old_price}.00
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   {products.length > 0 ? (
    //     products.map((product) => (
    //       <div
    //         key={product.id}
    //         className="rounded-xl overflow-hidden shadow-lg"
    //       >
    //         <div className="relative flexCenter group overflow-hidden transition-all duration-100">
    //           <Link
    //             to={`/product/${product.id}`}

    //             className="h-12 w-12 bg-white rounded-full flexCenter absolute top-1/2 bottom-1/2 !py-2 z-20 scale-0 group-hover:scale-100  transition-all duration-700 "
    //           >
    //             <FaSearch className="hover:rotate-90 scale-125 transition-all duration-200" />
    //           </Link>
    //           <img
    //             onClick={window.scrollTo(0, 0)}
    //             src={product.image}
    //             alt={product.name}
    //             className="w-full block object-cover group-hover:scale-110 transition-all duration-1000 "
    //           />
    //         </div>

    //         <div className="p-4 overflow-hidden">
    //           <h4 className="my-[6px] medium-16 line-clamp-2 text-gray-30">
    //             {product.name}
    //           </h4>
    //           <div className="flex gap-5">
    //             <div className="bold-16">${product.new_price}.00</div>
    //             <div className="text-secondary bold-16 line-through">
    //               ${product.old_price}.00
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))
    //   ) : (
    //     <p>No products found.</p>
    //   )}
    // </div>
  );
};

export default Item;
