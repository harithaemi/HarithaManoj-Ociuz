import React from "react";
import salonlogo from "../assets/salonlogo.png";

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex items-center justify-between h-20 shadow-md p-2">
      <div className="flex items-center">
        <img src={salonlogo} className="w-16 m-2" />
        <h1
          className={`${
            darkMode ? "text-[#D4AF37]" : "text-[#2C2C2C]"
          } font-light text-2xl sm:text-3xl md:text-4xl transition-colors duration-500`}
        >
          Salon Dashboard
        </h1>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`relative w-16 h-8 rounded-full transition-colors duration-500 ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-500 ${
            darkMode ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default Header;

