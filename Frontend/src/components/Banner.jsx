import React from "react";

function Banner({ theme }) {
  return (
    <div
      className={`max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col-reverse md:flex-row items-center pb-0 ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      {/* Left Section (Text Content) */}
      <div className="w-full md:w-1/2 mt-12 md:mt-32 space-y-6">
        <h1 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
          Hello, welcome here to learn something{" "}
          <span className="text-pink-500">new everyday!!!</span>
        </h1>
        <p className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
          Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor, et totam.
          Tempora amet atque expedita, quae corrupti totam sed pariatur corporis
          at veniam est voluptas animi!
        </p>

        {/* Email Input & Button */}
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="email"
            placeholder="mail@site.com"
            required
            className="input input-bordered w-full md:w-auto"
          />
          <button className="btn btn-primary w-full md:w-auto">Join</button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-32">
        <img
          src="/image/RR2.png"  // Corrected path for the public folder
          alt="Banner"
          className="w-[80%] max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </div>
  );
}

export default Banner;
