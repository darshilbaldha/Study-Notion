import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
// Import required modules
import { Autoplay, Pagination, FreeMode, Navigation } from "swiper/modules";
// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiconnector";
import { ratingsEndpoints } from "../../services/api";

function ReviewSlider() {
  const [reviews, setReviews] = useState([]);
  const truncateWords = 15;

  useEffect(() => {
    (async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      );
      if (data?.success) {
        setReviews(data?.data);
      }
    })();
  }, []);

  // console.log(reviews)

  return (
    <div className="text-white flex justify-center">
      <div className="my-[50px] h-[184px] max-w-[300px] sm:max-w-maxContentTab lg:max-w-maxContent lg:min-w-[1000px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          navigation={true}
          className="max-h-[30rem] w-full custom-swiper"
        >
          {reviews.length === 0
            ? (<div className="text-2xl text-center text-richblack-25 font-bold">No Reviews</div>)
            : reviews.map((review, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25  mb-10">
                      <div className="flex items-center gap-4 w-full">
                        <img
                          src={
                            review?.user?.image
                              ? review?.user?.image
                              : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                          }
                          alt=""
                          className="h-9 w-9 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                          <h2 className="text-[12px] font-medium text-richblack-500">
                            {review?.course?.courseName}
                          </h2>
                        </div>
                      </div>
                      <p className="font-medium text-richblack-25 break-words">
                        {review?.review.split(" ").length > truncateWords
                          ? `${review?.review
                              .split(" ")
                              .slice(0, truncateWords)
                              .join(" ")} ...`
                          : `${review?.review}`}
                      </p>
                      <div className="flex items-center gap-2 ">
                        <h3 className="font-semibold text-yellow-100">
                          {review.rating.toFixed(1)}
                        </h3>
                        <ReactStars
                          count={5}
                          value={review.rating}
                          size={20}
                          edit={false}
                          activeColor="#ffd700"
                          emptyIcon={<FaStar />}
                          fullIcon={<FaStar />}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewSlider;
