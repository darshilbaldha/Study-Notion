import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import { FreeMode } from "swiper";
import { Autoplay, Pagination, Navigation,FreeMode } from 'swiper/modules';

import Course_Card from "./Course_Card";

const CourseSlider = ({ Courses }) => {
  
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          modules={[Autoplay,FreeMode, Pagination,Navigation]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={true}
          className="max-h-[500px] mySwiper custom-swiper"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"}/>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5 md:pl-0 pl-4">No Course Found</p>
      )}
    </>
  );
};

export default CourseSlider;
