import React from "react";

const MediaCard = ({ title, image, description }) => (
  <div className="bg-white rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full object-cover" />
    <div className="pt-6">
      <h4 className="font-bold text-xl mb-2">{title}</h4>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

export default MediaCard;
