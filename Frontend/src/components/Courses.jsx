import React from 'react'
import list from "../../public/list.json";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
function Courses({ theme }) {
    console.log(list);
  
    return (
      <div
        className={`max-w-7xl w-full mx-auto text-center px-6 md:px-24 pt-24 ${
          theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"
        }`}
      >
        {/* Heading */}
        <h1 className={`text-4xl font-bold ${theme === "dark" ? "text-gray-300" : "text-gray-900"}`}>
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
  
        {/* Description */}
        <p className={`text-xl ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porro, assumenda?
          Repellendus, iste corrupti? Tempore laudantium repellendus accusamus
          accusantium sed architecto odio, nisi expedita quas quidem nesciunt
          debitis dolore non aspernatur praesentium assumenda sint.
        </p>
  
        {/* Back Button */}
        <Link to="/">
          <button
            className={`${
              theme === "dark" ? "bg-pink-500 text-white" : "bg-pink-600 text-white"
            } px-6 py-2 rounded-md mt-6 cursor-pointer`}
          >
            Back
          </button>
        </Link>
  
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 place-items-center">
          {list.map((item) => (
            <Cards item={item} key={item.id} theme={theme} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Courses;
  