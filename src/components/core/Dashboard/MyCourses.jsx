import { useEffect, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import IconBtn from "../../common/IconBtn";
import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI";
import CoursesTable from "./InstructorCourses.jsx/CoursesTable";

export default function MyCourses() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      // console.log(token);
      const result = await fetchInstructorCourses(token);
      if (result) {
        setCourses(result);
      }
    };
    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="sm:mb-14 mb-8 flex sm:flex-row flex-col sm:gap-0 gap-5 items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">My Courses</h1>
        <IconBtn
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </IconBtn>
      </div>
      <div className=" flex items-center justify-center">
        {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
      </div>
    </div>
  );
}
