import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
  const listMenu = [
    {
      link: "/",
      text: "Beranda",
    },
    {
      link: "/about",
      text: "Tentang Kami",
    },
    {
      link: "/help",
      text: "Bantuan",
    },
    {
      link: "/media",
      text: "Media",
    },
    {
      link: "/contact",
      text: "Kontak",
    },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://padiumkm.id/_next/static/media/logo.08a5ef96.svg"
            alt="PaDi UMKM Logo"
            className="h-10"
          />
        </div>
        <nav>
          <ul className="flex space-x-6">
            {listMenu.map((menu, index) => (
              <li key={index}>
                <NavLink
                  to={menu.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-600"
                      : "text-gray-600 hover:text-cyan-600"
                  }
                >
                  {menu.text}
                </NavLink>
              </li>
            ))}
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
