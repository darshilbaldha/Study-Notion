import React, { useState, useEffect, useRef } from "react";
import { BiSolidUpArrowCircle } from "react-icons/bi";

const UpArrow = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY  > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const container = containerRef.current;
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <a
      href="#section"
      className={`${isScrolled?"block":"hidden"} fixed right-3 bottom-3 xl:text-3xl text-2xl animate-bounce cursor-pointer`}
      ref={containerRef}
    >
      <BiSolidUpArrowCircle className="text-white bg-richblack-500 rounded-full" />
    </a>
  );
};

export default UpArrow;
