import React from "react";

const TopicCard = ({ icon, title, topics }) => (
  <div className="bg-white border-[1px] border-[#DDF2E4] rounded-lg p-5 flex flex-col justify-between">
    <div>
      <div className="flex items-center mb-4">
        <img src={icon} alt={title} className="w-[32px] object-cover" />
        <h3 className="text-xl font-bold text-gray-600 ml-2">{title}</h3>
      </div>
      <ul className="space-y-2 mb-4">
        {topics.map((topic, index) => (
          <li
            key={index}
            className="text-[16px] font-bold text-[#686E76] hover:text-[#009EA9] cursor-pointer"
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
    <button class="w-fit py-1 px-2 rounded border mt-2 border-[#009EA9] text-[#009EA9] hover:text-white hover:bg-[#009EA9]">
      Lihat Semua Artikel
    </button>
  </div>
);

export default TopicCard;
