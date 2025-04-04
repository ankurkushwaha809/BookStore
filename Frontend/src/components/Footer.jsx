import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer({ theme }) {
  return (
    <footer className={`py-10 transition-all duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">About Us</h2>
          <p className="text-sm opacity-80">
            We are passionate about books and learning. Join us to explore new ideas every day.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 opacity-80">
            <li><a href="#" className="hover:text-primary">Home</a></li>
            <li><a href="#" className="hover:text-primary">Courses</a></li>
            <li><a href="#" className="hover:text-primary">About</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="text-sm opacity-80">📧 support@bookstore.com</p>
          <p className="text-sm opacity-80">📞 +123 456 7890</p>
          <p className="text-sm opacity-80">📍 New York, USA</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center opacity-60 text-sm mt-6">
        © 2025 Book Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
