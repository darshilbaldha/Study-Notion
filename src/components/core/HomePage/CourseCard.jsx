import React from "react";
import { MdPeopleAlt } from "react-icons/md";
import { AiOutlineApartment } from "react-icons/ai";

const CourseCard = ({ element, currentCard, setCurrentCard }) => {
    function changeCard(){
        setCurrentCard(element.heading)
    }
  return (
    <div onClick={()=>changeCard()} className={`cursor-pointer ${element.heading===currentCard?("bg-white  shadow-[12px_12px_0_0] shadow-yellow-50"):("bg-richblack-800")} lg:h-fit h-[300px] font-inter`}>
      <div className={`${element.heading===currentCard?("text-black"):("text-white")} sm:p-7 p-3 font-semibold text-xl`}>{element.heading}</div>
      <div className="pb-16 text-richblack-300 sm:px-7 px-3 text-justify border-dashed border-b-[2px] h-[150px] border-richblack-300">
        {element.description}
      </div>
      <div className={`sm:px-7 px-3 ${element.heading===currentCard?("text-blue-200"):("text-richblack-300")} pt-4 pb-6 flex justify-between`}>
        <div className="flex items-center justify-center sm:gap-3 gap-1">
          <MdPeopleAlt />
          <p>{element.level}</p>
        </div>
        <div className={` flex items-center justify-center gap-2 font-inter`}>
          <div>
            <AiOutlineApartment />
          </div>
          <p>{element.lessionNumber} Lession</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
