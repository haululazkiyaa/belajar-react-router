import React from "react";

const TopicCard = ({ icon, title, topics }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-2">{title}</h3>
    </div>
    <ul className="space-y-2 mb-4">
      {topics.map((topic, index) => (
        <li key={index} className="text-gray-600">
          {topic}
        </li>
      ))}
    </ul>
    <button className="text-cyan-500 hover:text-cyan-600 font-semibold">
      Lihat Semua Artikel
    </button>
  </div>
);

const Help = () => {
  const helpTopics = [
    {
      icon: "#",
      title: "Akun",
      topics: [
        "Cara Buyer Batalkan Penawaran Tender Kilat",
        "Cara Buyer Buat Tender Kilat",
        "Cara Login Akun Buyer B2B PaDi UMKM",
        "Cara Daftar Akun Admin Perusahaan",
      ],
    },
    {
      icon: "#",
      title: "Pemesanan",
      topics: [
        "Cara Terima dan Checkout Tender Kilat",
        "Cara Belanja B2B dengan Termin",
        "Bagaimana Cara Belanja B2B di PaDi UMKM",
        "Cara Menindaklanjuti Permintaan Pembelian oleh Manager",
      ],
    },
    {
      icon: "#",
      title: "Pembayaran & Perpajakan",
      topics: [
        "Fitur Saldo Refund bagi Pembeli B2B PaDi UMKM",
        "Pembayaran Tempo",
        "Cara Revisi Pajak",
        "Pembayaran Langsung",
      ],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Pilih Topik Sesuai Kendalamu
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {helpTopics.map((topic, index) => (
          <TopicCard key={index} {...topic} />
        ))}
      </div>
    </main>
  );
};

export default Help;
