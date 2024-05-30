import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighLightText from "../components/core/HomePage/HighLightText";
import CTAButton from "../components/core/HomePage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearingLanguageSection from "../components/core/HomePage/LearingLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";

const Home = () => {
  return (
    <div className="font-inter">
      {/* {Section-1} */}
      <div className="flex flex-col mx-auto justify-center text-white w-11/12 items-center max-w-maxContent relative  ">
        <NavLink to={"/signup"}>
          <div className="group mt-16 p-1 rounded-full mx-auto bg-richblack-800 font-bold text-richblack-300 transition-all duration-200 hover:scale-95 w-fit drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]  hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-3 rounded-full px-10 py-[5px] group-hover:bg-richblack-900 ">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </NavLink>

        <div className="text-center text-4xl font-semibold mt-14">
          Empower Your Future with
          <HighLightText text={"Coding Skills"} />
        </div>

        <div className="font-bold text-richblack-300 text-lg w-[85%] text-center mt-5">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8 mb-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="mx-3 mt-7 sm:mb-12 mb-5 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="lg:shadow-[20px_20px_rgba(255,255,255)] shadow-[10px_10px_rgba(255,255,255)]"
            autoPlay
            muted
            loop
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* code section-1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row flex-col"}
            heading={
              <div className="font-bold items-center lg:text-start text-justify lg:items-start text-4xl">
                Unlock your <HighLightText text={"coding potential"} /> with our
                online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
          <html lang="en">
         <head>
         <title>This is myPage</title>
         </head>
         <body>
         <h1><a href="/">Header</a></h1>
         <nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>
         </nav>
         </body>`}
            codecolor={"text-yellow-25"}
            backgroundGradiant={"codeblock1"}
          />
        </div>

        {/* code section-2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse flex-col"}
            heading={
              <div className="font-bold lg:w-[50%] items-center lg:text-start text-justify lg:items-start text-4xl">
                Start <HighLightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`import React from "react";
            import CTAButton from "./Button";
           import TypeAnimation from "react-type";
           import { FaArrowRight } from "react-icons/fa";
           
           const Home = () => {
           return (
           <div>Home</div>
           )
           }
           export default Home;`}
            codecolor={"text-white"}
            backgroundGradiant={"codeblock2"}
          />
        </div>

        <ExploreMore/>
      </div>

      {/* {Section-2} */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="h-[180px] sm:h-[190px] lg:h-[190px]"></div>
            <div className="flex sm:flex-row gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="w-11/12 max-w-maxContent mx-auto">
          <div className="lg:pt-20 pt-14 pb-16 flex lg:flex-row flex-col lg:gap-0 gap-3 justify-between">
            <div className="lg:w-[45%] w-[100%] lg:text-start text-justify text-4xl font-bold">
              Get the skills you need for a
              <HighLightText text={"job that is in demand."} />
            </div>

            <div className="lg:w-[36.5%] w-full flex flex-col items-start gap-7">
              <div>
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <div className="lg:mx-0 mx-auto">
              <CTAButton active={true} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
              </div>
            </div>
          </div>

          <TimeLineSection />
          <LearingLanguageSection />
        </div>
      </div>

      {/* {Section-3} */}
      <div className="flex flex-col gap-7 w-11/12 max-w-maxContent mx-auto items-center justify-center">
        <InstructorSection />
        <h2 className="text-center text-4xl font-semibold text-white">
          Reviews from other learners
        </h2>
        {/* Review Slider code */}
        <ReviewSlider/>
      </div>

      {/* {footer} */}
      <footer className="bg-richblack-800 w-full">
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
