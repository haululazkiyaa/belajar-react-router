import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/api/placeholder/120/40"
            alt="PaDi UMKM Logo"
            className="h-10"
          />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="#"
                className="text-cyan-600 font-semibold border-b-2 border-cyan-600"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-cyan-600">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-cyan-600">
                Bantuan
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-cyan-600">
                Media
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-cyan-600">
                Kontak
              </Link>
            </li>
          </ul>
        </nav>
        <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition duration-300">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
