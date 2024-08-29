import MediaCard from "../components/MediaCard";
import React from "react";
import { mediaItems } from "../constants/media";

const Media = () => {
  return (
    <main className="h-full mx-10 my-10 lg:my-20 xl:my-20 lg:mx-40 xl:mx-40">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Media</h1>
      <p className="text-gray-600 mb-8">Informasi seputar PaDi UMKM</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaItems.map((item, index) => (
          <MediaCard key={index} {...item} />
        ))}
      </div>
    </main>
  );
};

export default Media;
