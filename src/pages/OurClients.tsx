import React from 'react';
import { motion } from 'framer-motion';
import Seo from '@/components/Seo';
import Footer from '@/components/Footer';

const OurClients = () => {
  const stats = [
    {
      title: "50+ Proyek Selesai",
      description: "Berbagai proyek sukses"
    },
    {
      title: "95% Kepuasan Klien",
      description: "Rating positif dari klien"
    },
    {
      title: "10+ Industri",
      description: "Beragam sektor bisnis"
    },
    {
      title: "100% On Time",
      description: "Proyek selesai tepat waktu"
    }
  ];

  const clients = [
    {
      name: "TechCorp Indonesia",
      logo: "💻",
      industry: "Teknologi",
      project: "Platform E-commerce",
      testimonial: "Tim yang sangat profesional dan hasil yang memuaskan.",
      rating: 5,
      year: 2023
    },
    {
      name: "FashionHub",
      logo: "👗",
      industry: "Fashion",
      project: "Website Branding",
      testimonial: "Desain yang modern dan sesuai dengan brand kami.",
      rating: 5,
      year: 2023
    },
    {
      name: "EduSmart",
      logo: "📚",
      industry: "Pendidikan",
      project: "Platform E-learning",
      testimonial: "Sistem yang mudah digunakan dan responsif.",
      rating: 5,
      year: 2023
    },
    {
      name: "FoodExpress",
      logo: "🍔",
      industry: "Kuliner",
      project: "Aplikasi Delivery",
      testimonial: "Peningkatan signifikan dalam penjualan online.",
      rating: 5,
      year: 2023
    },
    {
      name: "HealthCare Plus",
      logo: "🏥",
      industry: "Kesehatan",
      project: "Sistem Manajemen Pasien",
      testimonial: "Efisiensi operasional meningkat drastis.",
      rating: 5,
      year: 2023
    },
    {
      name: "TravelGo",
      logo: "✈️",
      industry: "Travel",
      project: "Platform Booking",
      testimonial: "Pengalaman pengguna yang luar biasa.",
      rating: 5,
      year: 2023
    },
    {
      name: "FinTech Solutions",
      logo: "💰",
      industry: "Finansial",
      project: "Aplikasi Mobile Banking",
      testimonial: "Keamanan dan performa yang sangat baik.",
      rating: 5,
      year: 2023
    },
    {
      name: "GreenEnergy",
      logo: "🌱",
      industry: "Energi",
      project: "Website Perusahaan",
      testimonial: "Komunikasi yang efektif dan hasil yang memuaskan.",
      rating: 5,
      year: 2023
    },
    {
      name: "RealEstate Pro",
      logo: "🏠",
      industry: "Properti",
      project: "Platform Listing",
      testimonial: "Peningkatan traffic dan konversi yang signifikan.",
      rating: 5,
      year: 2023
    },
    {
      name: "CreativeStudio",
      logo: "🎨",
      industry: "Kreatif",
      project: "Portfolio Website",
      testimonial: "Desain yang unik dan menarik perhatian.",
      rating: 5,
      year: 2023
    },
    {
      name: "AutoDrive",
      logo: "🚗",
      industry: "Otomotif",
      project: "Platform Penjualan Mobil",
      testimonial: "Sistem yang efisien dan mudah digunakan.",
      rating: 5,
      year: 2023
    },
    {
      name: "SportFit",
      logo: "🏋️",
      industry: "Olahraga",
      project: "Aplikasi Fitness",
      testimonial: "Pengalaman pengguna yang sangat baik.",
      rating: 5,
      year: 2023
    },
    {
      name: "LegalTech",
      logo: "⚖️",
      industry: "Hukum",
      project: "Sistem Manajemen Kasus",
      testimonial: "Keamanan data yang terjamin.",
      rating: 5,
      year: 2023
    },
    {
      name: "AgriTech",
      logo: "🌾",
      industry: "Pertanian",
      project: "Platform Monitoring Pertanian",
      testimonial: "Solusi yang inovatif untuk sektor pertanian.",
      rating: 5,
      year: 2023
    },
    {
      name: "MediaHub",
      logo: "📺",
      industry: "Media",
      project: "Platform Konten Digital",
      testimonial: "Performansi yang stabil dan handal.",
      rating: 5,
      year: 2023
    },
    {
      name: "LogisticsPro",
      logo: "📦",
      industry: "Logistik",
      project: "Sistem Tracking Pengiriman",
      testimonial: "Efisiensi operasional meningkat signifikan.",
      rating: 5,
      year: 2023
    },
    {
      name: "BeautyCare",
      logo: "💄",
      industry: "Kecantikan",
      project: "E-commerce Kosmetik",
      testimonial: "Peningkatan penjualan yang luar biasa.",
      rating: 5,
      year: 2023
    },
    {
      name: "EventMaster",
      logo: "🎪",
      industry: "Event",
      project: "Platform Manajemen Event",
      testimonial: "Sistem yang mudah digunakan dan efisien.",
      rating: 5,
      year: 2023
    },
    {
      name: "PetCare",
      logo: "🐾",
      industry: "Pet Care",
      project: "Aplikasi Perawatan Hewan",
      testimonial: "Fitur yang lengkap dan user-friendly.",
      rating: 5,
      year: 2023
    },
    {
      name: "SmartHome",
      logo: "🏡",
      industry: "Smart Home",
      project: "Aplikasi Kontrol Rumah",
      testimonial: "Integrasi yang sempurna dengan perangkat IoT.",
      rating: 5,
      year: 2023
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Our Clients | Portfolio"
        description="Lihat klien-klien yang telah bekerja sama dengan kami"
        url="http://localhost:8080/our-clients"
      />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
        >
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-[#f13131] to-[#dc0f0f] text-white py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-4"
                >
                  Klien Kami
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 10 }}
                  className="text-5xl font-bold mb-6"
                >
                  Klien yang Telah Bekerja Sama
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 10 }}
                  className="text-xl max-w-3xl mx-auto"
                >
                  Berbagai perusahaan telah mempercayai kami untuk mengembangkan solusi digital mereka
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-4 gap-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-[#f13131] transition-colors duration-300"
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-3xl font-bold text-[#f13131] mb-2"
                    >
                      {stat.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-gray-600"
                    >
                      {stat.description}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Clients Section */}
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-[#f13131] transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="text-4xl"
                      >
                        {client.logo}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center"
                      >
                        {[...Array(client.rating)].map((_, i) => (
                          <motion.svg
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 + i * 0.1 }}
                            className="w-5 h-5 text-[#f13131]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </motion.div>
                    </div>
                    <motion.h3
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-xl font-bold mb-2"
                    >
                      {client.name}
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center mb-4"
                    >
                      <span className="bg-[#feecec] text-[#f13131] px-3 py-1 rounded-full text-sm font-semibold">
                        {client.industry}
                      </span>
                      <span className="ml-2 text-gray-500 text-sm">
                        {client.year}
                      </span>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="text-gray-600 mb-4"
                    >
                      {client.project}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="bg-gray-50 rounded-lg p-4"
                    >
                      <p className="text-gray-600 italic">
                        "{client.testimonial}"
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-16 bg-gradient-to-r from-[#f13131] to-[#dc0f0f] text-white">
            <div className="container mx-auto px-4 text-center">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="text-3xl font-bold mb-6"
              >
                Siap Bekerja Sama?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 10 }}
                className="text-xl mb-8 max-w-2xl mx-auto"
              >
                Jadilah bagian dari klien kami yang sukses
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#f13131] py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Hubungi Kami
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default OurClients; 