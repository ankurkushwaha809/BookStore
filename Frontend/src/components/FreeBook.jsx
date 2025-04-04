import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function FreeBook({ theme }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const filterData = list.filter((data) => data.category === "Free");

  return (
    <div
      className={`w-full max-w-full container mx-auto px-10 md:px-20 pb-5  ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-700"
      } overflow-x-hidden`}
    >
      <br />
      {/* Header */}
      <h1 className={`text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
        Free Offered Courses
      </h1>
      <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
        Explore our free courses and expand your knowledge!
      </p>

      {/* Slider */}
      <Slider
        {...settings}
        className="mt-6"
        arrows={true} // Ensures arrows are always visible
        prevArrow={<CustomPrevArrow theme={theme} />}
        nextArrow={<CustomNextArrow theme={theme} />}
        appendDots={(dots) => (
          <div>
            <ul className={`${theme === "dark" ? "text-white" : "text-black"}`}>{dots}</ul>
          </div>
        )}
        dotsClass={`slick-dots ${theme === "dark" ? "dark-dots" : "light-dots"}`}
      >
        {filterData.map((item) => (
          <Cards item={item} key={item.id} theme={theme} />
        ))}
      </Slider>
    </div>
  );
}

// Custom Arrows for Slider
const CustomPrevArrow = ({ className, style, onClick, theme }) => (
  <div
    className={`${className} ${theme === "dark" ? "text-white" : "text-black"}`}
    style={{ ...style, display: "block", left: "-30px", zIndex: 10 }}
    onClick={onClick}
  />
);

const CustomNextArrow = ({ className, style, onClick, theme }) => (
  <div
    className={`${className} ${theme === "dark" ? "text-white" : "text-black"}`}
    style={{ ...style, display: "block", right: "-30px", zIndex: 10 }}
    onClick={onClick}
  />
);

export default FreeBook;
