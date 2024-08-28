import React from "react";

const About = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Visi Kami</h2>
          <p className="text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mb-6">Misi Kami</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </li>
            <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </li>
            <li>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img
            src="/api/placeholder/600/400"
            alt="PaDi UMKM Team"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
