import React from "react";

const NewsLetter = () => {
  return (
    <section className="max-padd-container py-12 xl:py-28 bg-white">
      <div className="mx-auto xl:w-[80%] flexCenter flex-col gap-y-8 w-full max-w-[666px]">
        <h3 className="h3 ">Get Exclusive Offers On Your Email</h3>
        <h4 className="uppercase bold-18">Subscribe To Our Newsletter And Stay Updated</h4>
        <div className="flexBetween rounded-full ring-1 ring-slate-900/10 hover:ring-slate-900/15 bg-primary w-full max-w-[588px]  ">
          <input type="email" placeholder="Your Email Address"  className="w-full bg-transparent ml-5 border-none outline-none regular-16"/>
          <button className="btn_dark_rounded bg-gray-90 text-white text-xs rounded-2xl px-3 py-2">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
