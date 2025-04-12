import React from "react";
import { Link } from "react-router-dom";
import {
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  SOCIAL,
  SOCIALS,
} from "../utils/data";
const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <footer className="flexCenter pb-24 pt-20 ">
      <div className="max-padd-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link to={"/"} className="mb-10 bold-20">
            <span className="text-green-400">GSO</span>-STORE
          </Link>
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className="flex flex-col text-start gap-4 regular-14 text-gray-20">
                  {col.links.map((link) => (
                    <Link to={"/"} key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5 text-start">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    to={"/"}
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p>{link.label}:</p>{" "}
                    <p className="medium-14">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex gap-3 ">
              {/* <FooterColumn>
                <ul>
                  {SOCIALS.links.map((link) => (
                    <Link to={"/"} key={link} > <img src={link} alt="socialIcon" height={22} width={22} /></Link>
                  ))}
                </ul>
              </FooterColumn> */}
              {SOCIAL.map((data) => {
                return (
                  <div key={data.id}>
                    <img
                      src={data.img}
                      alt="socialIcon"
                      height={22}
                      width={22}
                      className=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border bg-gray-20"></div>
        <p className="text-center regular-14 text-gray-30">
          &copy; {getYear} GSO-STORE | All rights reserved
        </p>
      </div>
    </footer>
  );
};
const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};
export default Footer;
