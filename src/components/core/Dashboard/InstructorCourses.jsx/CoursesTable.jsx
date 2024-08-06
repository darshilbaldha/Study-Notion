import { useDispatch, useSelector } from "react-redux";
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { HiClock } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

import { formatDate } from "../../../../services/formatData";
import {
  deleteCourse,
  fetchInstructorCourses,
  findTimeDuration,
} from "../../../../services/operations/courseDetailsAPI";
import { COURSE_STATUS } from "../../../../utils/constants";
import ConfirmationModal from "../../../common/ConfirmationModal";

export default function CoursesTable({ courses, setCourses }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const [courseDurations, setCourseDurations] = useState({});
  const TRUNCATE_LENGTH = 30;

  const handleCourseDelete = async (courseId) => {
    setLoading(true);
    await deleteCourse({ courseId: courseId }, token);
    const result = await fetchInstructorCourses(token);
    if (result) {
      setCourses(result);
    }
    setConfirmationModal(null);
    setLoading(false);
  };

  // const timeDurtion = async (courseId) => {
  //   setLoading(true);
  //   try {
  //     const time = await findTimeDuration(courseId);
  //     return time;
  //   } catch (error) {
  //     console.log("Could not fetch time of course");
  //   }
  //   setLoading(false);
  // };

  useEffect(() => {
    const fetchDurations = async () => {
      const durations = {};
      setLoading(true);
      for (const course of courses) {
        try {
          const duration = await findTimeDuration(course._id);
          durations[course._id] = duration;
        } catch (error) {
          console.error("Error fetching course duration:", error);
        }
      }
      setCourseDurations(durations);
      setLoading(false);
    };

    fetchDurations();
  }, [courses]); // Fetch durations when courses change
  // console.log("All Course ", courses)

  return (
    <>
      <div className="rounded-xl hidden xl:block border border-richblack-800 ">
        {!courses?.length == 0 && (
          <div className="flex w-full">
            <div className="flex w-full justify-between rounded-t-md border-b border-b-richblack-800 px-6 py-2">
              <div className="w-[70%] text-left text-sm font-medium uppercase text-richblack-100">
                Courses
              </div>
              <div className="w-[8%] text-center text-sm font-medium uppercase text-richblack-100">
                Duration
              </div>
              <div className="w-[7%] text-center text-sm font-medium uppercase text-richblack-100">
                Price
              </div>
              <div className="w-[7%] text-center text-sm font-medium uppercase text-richblack-100">
                Actions
              </div>
            </div>
          </div>
        )}

        <div>
          {courses?.length === 0 ? (
            <div className="rounded-md bg-richblack-800 px-28 py-14">
              <p className="text-center text-2xl font-bold text-richblack-5">
                No courses found
              </p>
              <Link to="/dashboard/add-course">
                <p className="mt-1 text-center text-lg font-semibold text-yellow-50">
                  Create a course
                </p>
              </Link>
            </div>
          ) : (
            courses?.map((course, i) => (
              <div
                key={course._id}
                className={`${
                  courses.length - 1 === i ? "border-none" : "border-b"
                } flex justify-between  border-richblack-800 px-6 py-8`}
              >
                <div className="flex w-[70%] gap-x-4">
                  <img
                    src={course?.thumbnail}
                    alt={course?.courseName}
                    className="h-[148px] w-[220px] rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-lg font-semibold text-richblack-5">
                      {course.courseName}
                    </p>
                    <p className="text-xs text-richblack-300">
                      {course.courseDescription.split(" ").length >
                      TRUNCATE_LENGTH
                        ? course.courseDescription
                            .split(" ")
                            .slice(0, TRUNCATE_LENGTH)
                            .join(" ") + "..."
                        : course.courseDescription}
                    </p>
                    <p className="text-[12px] text-white">
                      Created: {formatDate(course.createdAt)}
                    </p>
                    {course.status === COURSE_STATUS.DRAFT ? (
                      <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
                        <HiClock size={14} />
                        Drafted
                      </p>
                    ) : (
                      <div className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
                        <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
                          <FaCheck size={8} />
                        </div>
                        Published
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-[8%] text-sm font-medium text-richblack-100 text-center">
                  {courseDurations[course._id] || "Loading..."}
                </div>
                <div className="w-[7%] text-sm font-medium text-richblack-100 text-center">
                  ₹{course.price}
                </div>
                <div className="w-[7%] text-sm font-medium text-richblack-100 text-center">
                  <button
                    disabled={loading}
                    onClick={() => {
                      navigate(`/dashboard/edit-course/${course._id}`);
                    }}
                    title="Edit"
                    className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
                  >
                    <FiEdit2 size={20} />
                  </button>
                  <button
                    disabled={loading}
                    onClick={() => {
                      setConfirmationModal({
                        text1: "Do you want to delete this course?",
                        text2:
                          "All the data related to this course will be deleted",
                        btn1Text: !loading ? "Delete" : "Loading...  ",
                        btn2Text: "Cancel",
                        btn1Handler: !loading
                          ? () => handleCourseDelete(course._id)
                          : () => {},
                        btn2Handler: !loading
                          ? () => setConfirmationModal(null)
                          : () => {},
                      });
                    }}
                    title="Delete"
                    className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="rounded-xl border border-richblack-800 sm:w-fit mx-1 sm:mx-0  w-screen">
        <div className="xl:hidden block ">
          {courses?.length === 0 ? (
            <div className="rounded-md bg-richblack-800 px-10 py-10">
            <p className="text-center text-2xl font-bold text-richblack-5">
              No courses found
            </p>
            <Link to="/dashboard/add-course">
              <p className="mt-1 text-center text-lg font-semibold text-yellow-50">
                Create a course
              </p>
            </Link>
          </div>
          ) : (
            courses?.map((course, i) => (
              <div
                key={course._id}
                className={`${
                  courses.length - 1 === i ? "border-none" : "border-b"
                } flex flex-col   border-richblack-800 md:px-6 px-3`}
              >
                <div className="flex gap-x-4 sm:gap-x-8">
                  <div className="flex w-[85px] border-r border-r-richblack-800  items-center text-left text-sm font-medium uppercase text-richblack-100">
                    Courses
                  </div>
                  <div className="flex gap-y-4 flex-col pt-8 w-[60%] sm:w-[300px] md:w-fit">
                    <img
                      src={course?.thumbnail}
                      alt={course?.courseName}
                      className="sm:h-[148px] sm:w-[220px] h-[120px] w-[150px] rounded-lg object-cover"
                    />
                    <div className="flex flex-col gap-y-2 justify-between pb-8">
                      <p className="text-lg font-semibold text-richblack-5">
                        {course.courseName}
                      </p>
                      <p className="text-xs text-richblack-300 ">
                        {course.courseDescription.split(" ").length >
                        TRUNCATE_LENGTH
                          ? course.courseDescription
                              .split(" ")
                              .slice(0, TRUNCATE_LENGTH)
                              .join(" ") + "..."
                          : course.courseDescription}
                      </p>
                      <p className="text-[12px] text-white">
                        Created: {formatDate(course.createdAt)}
                      </p>
                      {course.status === COURSE_STATUS.DRAFT ? (
                        <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
                          <HiClock size={14} />
                          Drafted
                        </p>
                      ) : (
                        <div className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
                          <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
                            <FaCheck size={8} />
                          </div>
                          Published
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-8">
                  <div className="flex  border-r border-r-richblack-800 w-[85px] pb-8 items-center text-left text-sm font-medium uppercase text-richblack-100">
                    DURATION
                  </div>
                  <div className="text-sm font-medium text-richblack-100 pb-8">
                    {courseDurations[course._id] || "Loading..."}
                  </div>
                </div>
                <div className="flex gap-x-8">
                  <div className="flex  border-r border-r-richblack-800 w-[85px] pb-8 items-center text-left text-sm font-medium uppercase text-richblack-100">
                    PRICE
                  </div>
                  <div className="text-sm font-medium text-richblack-100 pb-8">
                    ₹{course.price}
                  </div>
                </div>
                <div className="flex gap-x-8">
                  <div className="flex  border-r border-r-richblack-800 w-[85px] pb-8 items-center text-left text-sm font-medium uppercase text-richblack-100">
                    ACTIONS
                  </div>
                  <div className="text-sm font-medium text-richblack-100 ">
                    <button
                      disabled={loading}
                      onClick={() => {
                        navigate(`/dashboard/edit-course/${course._id}`);
                      }}
                      title="Edit"
                      className="pr-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
                    >
                      <FiEdit2 size={20} />
                    </button>
                    <button
                      disabled={loading}
                      onClick={() => {
                        setConfirmationModal({
                          text1: "Do you want to delete this course?",
                          text2:
                            "All the data related to this course will be deleted",
                          btn1Text: !loading ? "Delete" : "Loading...  ",
                          btn2Text: "Cancel",
                          btn1Handler: !loading
                            ? () => handleCourseDelete(course._id)
                            : () => {},
                          btn2Handler: !loading
                            ? () => setConfirmationModal(null)
                            : () => {},
                        });
                      }}
                      title="Delete"
                      className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
                    >
                      <RiDeleteBin6Line size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
}
