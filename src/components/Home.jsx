import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 to-cyan-300">
      <main className="container mx-auto px-4 py-16 flex items-center">
        <div className="w-1/2 pr-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            PaDi UMKM Hadir Sebagai Satu Solusi Bisnis bagi UMKM, BUMN dan
            Pemerintah.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Mempertemukan UMKM berkualitas dengan perusahaan BUMN maupun Swasta
            untuk mendapatkan transaksi dengan harga dan kualitas terbaik.
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="/api/placeholder/600/400"
            alt="UMKM Collaboration"
            className="rounded-lg shadow-xl"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
