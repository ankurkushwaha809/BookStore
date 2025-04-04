import React from "react";

function Cards({ item, theme }) {
  return (
    <div className="p-3">
      <div
        className={`card   h-90 md:w-70 shadow-xl transition-all duration-300 transform hover:scale-105 
          ${theme === "dark"
            ? "bg-gray-800 text-gray-300 border border-gray-700"
            : "bg-white text-gray-700 shadow-lg"
        }`}
      >
        {/* Image */}
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Course"
            className="object-cover w-full h-40 rounded-t-md"
          />
        </figure>

        {/* Card Body */}
        <div className="p-4 space-y-3 pb-0 md:pb-4"> {/* FIXED PADDING */}
          <h2 className="font-semibold text-lg">
            {item.name}
            <span
              className={`ml-2 text-xs font-semibold px-2 py-1 rounded-full 
                ${theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"}
              `}
            >
              {item.category}
            </span>
          </h2>
          <p className="text-sm">{item.title}</p>

          {/* Card Actions */}
          <div className="flex justify-between items-center mt-4">
            {/* Price */}
            <div
              className={`px-4 py-2 rounded-full border 
                ${theme === "dark" ? "border-white text-gray-300" : "border-black text-black"}
              `}
            >
              ₹{item.price}
            </div>

            {/* Buy Now Button */}
            <button
              className={`px-4 py-2 rounded-full text-white transition-all duration-300 hover:cursor-pointer 
                ${theme === "dark"
                  ? "bg-pink-500 hover:bg-pink-600"
                  : "bg-black hover:bg-pink-500"
              }`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;


// /*

// import React from "react";

// function Cards({ item, theme }) {
//   return (
//     <div className="p-3">
//       <div
//         className={`card w-70 h-90 shadow-xl transition-all duration-300 transform hover:scale-105 ${
//           theme === "dark"
//             ? "bg-gray-800 text-gray-300 border border-gray-700"
//             : "bg-white text-gray-700 shadow-lg"
//         }`}
//       >
//         {/* Image */}
//         <figure>
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//             alt="Course"
//             className="object-cover w-full h-40 rounded-t-md"
//           />
//         </figure>

//         {/* Card Body */}
//         <div className="p-4 space-y-3">
//           <h2 className="font-semibold text-lg">
//             {item.name}
//             <span
//               className={`ml-2 text-xs font-semibold px-2 py-1 rounded-full ${
//                 theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
//               }`}
//             >
//               {item.category}
//             </span>
//           </h2>
//           <p className="text-sm">{item.title}</p>

//           {/* Card Actions */}
//           <div className="flex justify-between items-center mt-4">
//             {/* Price */}
//             <div
//               className={`px-4 py-2 rounded-full border ${
//                 theme === "dark" ? "border-white text-gray-300" : "border-black text-black"
//               }`}
//             >
//               ₹{item.price}
//             </div>

//             {/* Buy Now Button */}
//             <button
//               className={`px-4 py-2 rounded-full text-white transition-all duration-300 hover:cursor-pointer ${
//                 theme === "dark"
//                   ? "bg-pink-500 hover:bg-pink-600"
//                   : "bg-black hover:bg-pink-500"
//               }`}
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;

// */