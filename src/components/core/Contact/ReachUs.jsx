import React from "react";
import ReachComponent from "./ReachComponent";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { BiWorld } from "react-icons/bi";
import { IoCall } from "react-icons/io5";

const ReachUs = () => {
  return (
    <div className="flex flex-col bg-richblack-800 rounded-xl p-6 lg:p-8 gap-10">
      <ReachComponent
        logo={<HiChatBubbleLeftRight />}
        title={"Chat on us"}
        title1={"Our friendly team is here to help."}
        desc={"info@studynotion.com"}
      />
      <ReachComponent
        logo={<BiWorld />}
        title={"Visit us"}
        title1={"Come and say hello at our office HQ."}
        desc={
          "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
        }
      />
      <ReachComponent
        logo={<IoCall />}
        title={"Call us"}
        title1={"Mon - Fri From 8am to 5pm"}
        desc={"+123 456 7869"}
      />
    </div>
  );
};

export default ReachUs;
