import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighLightText from "./HighLightText";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="flex lg:flex-row  flex-col gap-10 lg:gap-0 justify-between mt-20 mb-10">
      <img src={Instructor} alt="" className="shadow-[-10px_-10px_rgba(255,255,255)] lg:shadow-[-20px_-20px_0px_rgb(255,255,255)]" />
      <div className="flex flex-col lg:pl-20 justify-center lg:mx-0 mx-auto">
        <div className="text-4xl font-inter lg:text-start text-center w-[90%] lg:w-[50%] text-white font-semibold">
          Become an
          <HighLightText text={"instructor"} />
        </div>
        <div className="text-richblack-300 text-[16px] font-medium font-inter text-justify my-6 lg:my-10 w-[90%]">
          Instructors from around the world teach millions of students on
          StudyNotion. We provide the tools and skills to teach what you love.
        </div>
        <div className="w-fit lg:mx-0 mx-auto">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex items-center gap-2">
              Start Teaching Today
              <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
