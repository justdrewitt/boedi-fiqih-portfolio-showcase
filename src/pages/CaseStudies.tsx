import React from 'react';
import { motion } from 'framer-motion';
import Seo from '@/components/Seo';
import Footer from '@/components/Footer';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  results: string[];
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "E-Commerce Website untuk Toko Fashion",
    description: "Pembuatan website e-commerce dengan fitur lengkap untuk toko fashion lokal. Integrasi dengan sistem pembayaran dan manajemen stok.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    category: "E-Commerce",
    results: [
      "Peningkatan penjualan online sebesar 200%",
      "Konversi pengunjung meningkat 150%",
      "Waktu loading website berkurang 60%"
    ],
    link: "/case-studies/fashion-ecommerce"
  },
  {
    id: 2,
    title: "Website Company Profile Perusahaan Teknologi",
    description: "Pengembangan website company profile modern dengan fitur interaktif untuk perusahaan teknologi terkemuka.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    category: "Company Profile",
    results: [
      "Peningkatan traffic website 300%",
      "Waktu rata-rata kunjungan meningkat 40%",
      "Konversi lead meningkat 120%"
    ],
    link: "/case-studies/tech-company"
  },
  {
    id: 3,
    title: "Website Restoran dengan Sistem Reservasi",
    description: "Pembuatan website restoran premium dengan sistem reservasi online dan menu digital.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    category: "Restaurant",
    results: [
      "Reservasi online meningkat 250%",
      "Pesanan takeaway meningkat 180%",
      "Rating Google meningkat 1.5 poin"
    ],
    link: "/case-studies/restaurant"
  },
  {
    id: 4,
    title: "Website Pendidikan Online",
    description: "Pengembangan platform pembelajaran online dengan fitur kursus, quiz, dan sertifikasi.",
    image: "https://images.unsplash.com/photo-1503676260728-1c601da6d5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    category: "Education",
    results: [
      "Jumlah siswa meningkat 400%",
      "Retensi siswa meningkat 200%",
      "Rating platform 4.8/5"
    ],
    link: "/case-studies/education"
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Case Studies | Portfolio & Proyek Website"
        description="Lihat studi kasus proyek website kami. Contoh hasil kerja kami dalam pembuatan website e-commerce, company profile, dan berbagai jenis website lainnya."
        url="http://localhost:8080/case-studies"
      />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold text-teal-600 mb-4">
                Case Studies
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Lihat proyek-proyek terbaik kami dan bagaimana kami membantu klien mencapai tujuan mereka
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-64">
                    <motion.img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Hasil:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {study.results.map((result, i) => (
                          <li key={i}>{result}</li>
                        ))}
                      </ul>
                    </div>
                    <motion.a
                      href={study.link}
                      className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Lihat Detail
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies; 