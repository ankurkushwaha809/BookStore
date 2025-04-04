import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Course from "./Pages/Course";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import NotFound from "./components/NotFounf";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.className = theme;
    document.documentElement.style.backgroundColor =
      theme === "dark" ? "#000" : "#fff"; // Ensure full black background in dark mode
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
    document.documentElement.style.backgroundColor =
      newTheme === "dark" ? "#000" : "#fff";

    // Show toast notification
    toast(
      `${
        newTheme === "dark"
          ? "🌙 Dark mode activated!"
          : "☀️ Light mode activated!"
      }`,
      {
        position: "top-center",
        autoClose: 300,
        hideProgressBar: true, // Hides the loading underline
        style: {
          borderRadius: "10px",
          background: newTheme === "dark" ? "#000" : "#fff", // Black for dark mode, white for light mode
          color: newTheme === "dark" ? "#fff" : "#000", // White text for dark mode, black text for light mode
          boxShadow: "none", // No shadow or border effects
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
        },
      }
    );
  };

  return (
    <div className={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/course" element={<Course theme={theme} />} />
        <Route
          path="*"
          element={ <NotFound/> }
        />{" "}
      </Routes>
      
      <Footer theme={theme} />

      <ToastContainer />
    </div>
  );
}

export default App;
