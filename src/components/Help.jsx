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

const Help = () => {
  const helpTopics = [
    {
      icon: "/images/ic-akun.png",
      title: "Akun",
      topics: [
        "Cara Buyer Batalkan Penawaran Tender Kilat",
        "Cara Buyer Buat Tender Kilat",
        "Cara Login Akun Buyer B2B PaDi UMKM",
        "Cara Daftar Akun Admin Perusahaan",
      ],
    },
    {
      icon: "/images/ic-pembayaran.png",
      title: "Pemesanan",
      topics: [
        "Cara Terima dan Checkout Tender Kilat",
        "Cara Belanja B2B dengan Termin",
        "Bagaimana Cara Belanja B2B di PaDi UMKM",
        "Cara Menindaklanjuti Permintaan Pembelian oleh Manager",
      ],
    },
    {
      icon: "/images/ic-pemesanan.png",
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
    <main className="h-full mx-10 my-10 lg:my-20 xl:my-20 lg:mx-40 xl:mx-40 text-[#444B55]">
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
