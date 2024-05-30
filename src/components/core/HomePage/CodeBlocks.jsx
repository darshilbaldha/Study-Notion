import React from "react";
import CTAButton from "./CTAButton";
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from "react-icons/fa";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradiant,
  codecolor,
}) => {
  
  return (
    <div className={`flex ${position} lg:my-20 my-10 justify-between gap-10`}>
      {/* section-1 */}
      <div className="flex flex-col items-center lg:items-start lg:w-[50%] gap-6">
        {heading}
        <div className="text-richblack-300 w-[90%] text-[17px] font-inter font-bold">{subheading}</div>

        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center justify-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>
      {/* section-2 */}
      <div className="relative flex flex-row sm:w-[350px] w-[300px] h-fit border-richblack-600 mx-auto border-[2px] py-3 lg:w-[470px]">
        <div className={`absolute ${backgroundGradiant}`}></div>
        <div className="flex text-center flex-col w-[10%] text-richblack-400 font-inter font-bold">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p className="xl:hidden block">12</p>
          <p className="lg:hidden block">13</p>
          <p className="sm:hidden block">14</p>
        </div>

        <div className={`lg:w-[90%] w-full flex flex-col font-bold font-mono ${codecolor}`}>
          <TypeAnimation 
          sequence={[codeblock,1000,""]}
          repeat={Infinity}
          cursor={true}

          style={{
            whiteSpace:"pre-line",
            display:"block"
          }}
          omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
