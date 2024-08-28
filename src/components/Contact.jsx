import React from "react";

const Contact = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h1>
      <p className="text-lg text-gray-600 mb-8">
        Memiliki pertanyaan lebih lanjut seputar PaDi UMKM?
        <br />
        Silakan menghubungi Kami secara langsung.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Layanan Informasi Pengguna
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700">Email</h3>
              <p className="text-cyan-600">cs@padiumkm.id</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Whatsapp</h3>
              <p className="text-cyan-600">+62 812 9000 7820</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">
                Senin - Jumat | 08:00 - 17:00 WIB
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Kantor Kami
          </h2>
          <p className="font-semibold text-gray-700">PaDi UMKM Headquarters</p>
          <p className="text-gray-600">
            Gedung Telkom Direktorat Business and Technology
            <br />
            Jln. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI Jakarta, 12810
            <br />
            Indonesia
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
