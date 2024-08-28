import React from "react";

const MediaCard = ({ title, image, description }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute top-0 left-0 right-0 bg-cyan-500 text-white p-4 rounded-b-lg">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
    <div className="p-4">
      <h4 className="font-bold text-xl mb-2">{title}</h4>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

const Media = () => {
  const mediaItems = [
    {
      title: "Mengenal Jenis Tripod dan Masing-Masing Kelebihannya",
      image: "/api/placeholder/400/300",
      description:
        "Tripod adalah komponen penting dalam dunia fotografi untuk memudahkan Anda untuk meletakkan kamera agar tidak mudah goyang terutih untuk jangka waktu yang panja...",
    },
    {
      title: "Mengenal Jenis Kamera dan Masing-Masing Kelebihannya",
      image: "/api/placeholder/400/300",
      description:
        "Kamera menjadi kebutuhan penting untuk menjepret gambar maupun merekam video dengan hasil yang mumpuni. Anda perlu tahu kalau kamera juga punya jenis yang berg...",
    },
    {
      title:
        "3 Rekomendasi Handphone yang Bisa Anda Beli dengan Spesifikasi Mumpuni",
      image: "/api/placeholder/400/300",
      description:
        "Handphone menjadi kebutuhan penting untuk komunikasi. Dulunya handphone hanya bisa digunakan untuk telepon maupun SMS namun kini fungsinya menjadi lebih kompl...",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
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
