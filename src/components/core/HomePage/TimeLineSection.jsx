import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import TimelineImage from "../../../assets/Images/TimelineImage.png"

const TimeLine = [
  {
    Logo: Logo1,
    Heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    Heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    Heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    Heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];
const TimeLineSection = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-15 justify-center">
      <div className="flex flex-col sm:w-[45%] w-[90%] lg:py-0 pb-14">
        {TimeLine.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-start">
              <div className="flex gap-5" key={index}>
                <div className="w-[50px] h-[50px] bg-white flex items-center rounded-full justify-center shadow-lg">
                  <img src={item.Logo} alt="Logo" />
                </div>
                <div className="">
                  <div className="font-semibold text-[18px]">{item.Heading}</div>
                  <div className="text-base">{item.Description}</div>
                </div>
              </div>
              {index === TimeLine.length-1 ? (
                <div></div>
              ) : (
                <div className="h-[55px] w-[25px] my-2 border-r-[0.1px] border-richblack-100 border-dotted"></div>
              )}
            </div>
          );
        })}
      </div>
      <div className=" relative"> 
      <div className="shadow-[10px_-5px_50px_-5px] shadow-blue-200">
      <div className="shadow-[10px_10px_rgba(255,255,255)] sm:shadow-[20px_20px_rgba(255,255,255)] w-fit h-fit">
        <img className="w-[630px] sm:h-[480px] h-[300px]" src={TimelineImage} alt="" />
      </div>
      </div>
        <div className="absolute bottom-[-60px] left-[30px] w-[85%] items-center justify-center bg-caribbeangreen-700 flex flex-col sm:flex-row text-white uppercase py-3 sm:py-10 ">
            <div className="flex sm:gap-7 gap-2 items-center sm:mx-0 mx-auto lg:px-10 py-2 border-caribbeangreen-300 sm:border-b-0 border-b-[0.2px]  sm:border-r-[0.2px]">
                <p className="text-3xl font-bold text-center w-[30%]">10</p>
                <p className="text-caribbeangreen-300 text-sm w-[60%]">Years experience</p>
            </div>

            <div className="flex sm:gap-7 gap-2 items-center lg:px-10 px-5 sm:mx-0 mx-auto py-2">
                <p className="text-3xl font-bold w-[40%] text-center sm:w-[30%]">250</p>
                <p className="text-caribbeangreen-300 text-sm w-[60%]">types of courses</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;
