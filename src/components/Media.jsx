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

const Media = () => {
  const mediaItems = [
    {
      title: "Mengenal Jenis Tripod dan Masing-Masing Kelebihannya",
      image: "/images/thumbnail-1.jpeg",
      description:
        "Tripod adalah komponen penting dalam dunia fotografi untuk memudahkan Anda untuk meletakkan kamera agar tidak mudah goyang terutih untuk jangka waktu yang panja...",
    },
    {
      title: "Mengenal Jenis Kamera dan Masing-Masing Kelebihannya",
      image: "/images/thumbnail-2.jpeg",
      description:
        "Kamera menjadi kebutuhan penting untuk menjepret gambar maupun merekam video dengan hasil yang mumpuni. Anda perlu tahu kalau kamera juga punya jenis yang berg...",
    },
    {
      title:
        "3 Rekomendasi Handphone yang Bisa Anda Beli dengan Spesifikasi Mumpuni",
      image: "/images/thumbnail-3.jpeg",
      description:
        "Handphone menjadi kebutuhan penting untuk komunikasi. Dulunya handphone hanya bisa digunakan untuk telepon maupun SMS namun kini fungsinya menjadi lebih kompl...",
    },
  ];

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
