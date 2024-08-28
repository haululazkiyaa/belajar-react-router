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
    <header className="bg-white">
      <div className="container lg:px-20 xl:px-40 px-10 py-4 flex items-center">
        <a href="/" className="w-52">
          <img src="/svgs/logo.svg" alt="PaDi UMKM Logo" className="h-[64px]" />
        </a>
        <nav>
          <ul className="lg:!flex max-lg:hidden  max-lg:w-full lg:space-x-10 max-lg:space-y-3 max-lg:my-4 text-[#212427] items-center">
            {listMenu.map((menu, index) => (
              <li key={index}>
                <NavLink
                  to={menu.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[18px] text-[#212427] font-bold border-b-4 w-fit border-[#009EA9] hover:text-[#009EA9]"
                      : "text-[18px] text-[#212427] hover:text-[#009EA9] py-2"
                  }
                >
                  {menu.text}
                </NavLink>
              </li>
            ))}
            <li>
              <button className="border-[1px] border-[#009EA9] rounded-lg px-3 py-2 text-[#009EA9] cursor-pointer max-lg:w-fit">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
