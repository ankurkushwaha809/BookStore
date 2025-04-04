import React, { useState } from "react";
import Signup from "./Signup";
import { useForm } from "react-hook-form";

function Login({theme}) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Here, you can add authentication logic (e.g., API call)
  };

  return (
    <div>
      {/* Login Modal */}
      {isLoginOpen && (
        <dialog open className="modal">
          <div className={`modal-box rounded-lg shadow-lg p-8 bg-white max-w-md mx-auto
           ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}
            `}>
            <button
              onClick={() => setIsLoginOpen(false)}
              className={`
                btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-600 hover:text-gray-800 
                ${theme === "dark" ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-800"}
                `}
            >
              ✕
            </button>
            <h3 className="font-bold text-2xl text-center text-gray-800">Login</h3>
            <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition duration-200"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full mt-2 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition duration-200"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Login
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Not Registered?</p>
              <button
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => {
                  setIsLoginOpen(false);
                  setIsSignupOpen(true);
                }}
              >
                Signup
              </button>
            </div>
          </div>
        </dialog>
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <Signup
          isOpen={isSignupOpen}
          setIsOpen={setIsSignupOpen}
          setIsLoginOpen={setIsLoginOpen} // Pass login modal control to Signup
        />
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsLoginOpen(true)}
        className="btn bg-black text-white px-4 py-1"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
