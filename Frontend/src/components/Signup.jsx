import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Signup({ isOpen, setIsOpen, setIsLoginOpen, theme }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  if (!isOpen) return null;

  return (
    <dialog open className={`modal ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className={`modal-box rounded-lg shadow-lg p-8 max-w-md mx-auto transition-all duration-300
        ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        
        <button
          onClick={() => setIsOpen(false)}
          className={`btn btn-sm btn-circle btn-ghost absolute right-2 top-2 transition duration-200 
          ${theme === "dark" ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-800"}`}
        >
          ✕
        </button>
        
        <h3 className="font-bold text-2xl text-center">Sign Up</h3>
        
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className={`w-full mt-2 px-4 py-2 border rounded-md shadow-sm focus:ring-2 outline-none transition duration-200
              ${theme === "dark" ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400" : "bg-white text-black border-gray-300 focus:ring-blue-500"}`}
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full mt-2 px-4 py-2 border rounded-md shadow-sm focus:ring-2 outline-none transition duration-200
              ${theme === "dark" ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400" : "bg-white text-black border-gray-300 focus:ring-blue-500"}`}
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className={`w-full mt-2 px-4 py-2 border rounded-md shadow-sm focus:ring-2 outline-none transition duration-200
              ${theme === "dark" ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400" : "bg-white text-black border-gray-300 focus:ring-blue-500"}`}
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-md transition duration-200
            ${theme === "dark" ? "bg-green-500 hover:bg-green-600 text-white" : "bg-green-600 hover:bg-green-700 text-white"}`}
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-4 text-center">
          <p className="text-sm">Already have an account?</p>
          <button
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => {
              setIsOpen(false); // Close Signup Modal
              setIsLoginOpen(true); // Open Login Modal
            }}
          >
            Login
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default Signup;
