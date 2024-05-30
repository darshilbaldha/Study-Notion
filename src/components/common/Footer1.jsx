import React from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo_Full_Light from "../../assets/Logo/Logo_Full_Light.png";

const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer1 = () => {
  return (
    <div className="flex flex-row flex-wrap  gap-8">
      <div className="">
        <div>
          <img src={Logo_Full_Light} alt="" />
        </div>
        <div>
          <p className="text-richblack-50 my-4 font-semibold text-bold">
            Company
          </p>
          <div className="flex gap-3 flex-col">
            {["About", "Careers", "Affiliates"].map((ele, i) => {
              return (
                <div
                  key={i}
                  className="text-[14px] cursor-pointer hover:text-richblack-100 text-richblack-300  transition-all duration-200"
                >
                  <NavLink to={ele.toLowerCase()}>{ele}</NavLink>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-3 mt-5 text-richblack-300 text-lg">
          <FaFacebook />
          <FaGoogle />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
      <div className="flex flex-row md:flex-col pr-16">
        <div>
          <p className="text-richblack-50 font-semibold text-bold mb-3">Resources</p>
          <div className="flex flex-col gap-3 text-richblack-400 ">
            {Resources.map((element, index) => {
              return (<div className="hover:text-richblack-50 text-[14px] cursor-pointer" key={index}>
                <NavLink to={element.split(" ").join("-").toLowerCase()}>{element}</NavLink>
                </div>
            )})}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-richblack-50 font-semibold text-bold md:mt-7 mb-3">Support</p>
          <NavLink className="flex flex-col text-[14px] gap-3 text-richblack-400 hover:text-richblack-50 cursor-pointer" to={"/help-center"}>Help Center</NavLink>
        </div>
      </div>
      <div className="flex md:flex-col flex-row md:gap-0 gap-5">
        <div>
          <p className="text-richblack-50 font-semibold text-bold mb-3">Plans</p>
          <div className="flex flex-col gap-3 text-richblack-400 ">
            {Plans.map((element, index) => {
              return (<div className="hover:text-richblack-50 text-[14px] cursor-pointer" key={index}>
                <NavLink to={element.split(" ").join("-").toLowerCase()}>{element}</NavLink>
                </div>
            )})}
          </div>
        </div>
        <div>
          <p className="text-richblack-50 font-semibold text-bold mb-3 md:mt-7">Community</p>
          <div className="flex flex-col gap-3 text-richblack-400 ">
            {Community.map((element, index) => {
              return (<div className="hover:text-richblack-50 text-[14px] cursor-pointer" key={index}>
                <NavLink to={element.split(" ").join("-").toLowerCase()}>{element}</NavLink>
                </div>
            )})}
          </div>
        </div>
        </div>
    </div>
  );
};

export default Footer1;
