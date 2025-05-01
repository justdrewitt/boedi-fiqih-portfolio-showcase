import React from 'react';
import { motion } from 'framer-motion';
import Seo from '@/components/Seo';
import Footer from '@/components/Footer';

const OurClients = () => {
  const clients = [
    {
      name: "TechCorp Indonesia",
      logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      industry: "Teknologi",
      project: "Website Perusahaan",
      testimonial: "Tim yang sangat profesional dan hasil yang memuaskan.",
      rating: 5,
      year: "2023"
    },
    {
      name: "FashionHub",
      logo: "https://images.unsplash.com/photo-1547387557-21339915455f",
      industry: "Fashion",
      project: "E-commerce Platform",
      testimonial: "Website yang modern dan mudah digunakan.",
      rating: 5,
      year: "2023"
    },
    {
      name: "EduSmart",
      logo: "https://i.pinimg.com/736x/b3/5f/56/b35f5688d939bffebeef3a3a5d18065e.jpg",
      industry: "Pendidikan",
      project: "Platform Pembelajaran Online",
      testimonial: "Sistem yang intuitif dan responsif.",
      rating: 5,
      year: "2023"
    },
    {
      name: "FoodExpress",
      logo: "https://i.pinimg.com/736x/fa/d5/ad/fad5adfc4cefb65047862d1c50a0262c.jpg",
      industry: "Restoran",
      project: "Website & Sistem Reservasi",
      testimonial: "Meningkatkan efisiensi bisnis kami.",
      rating: 5,
      year: "2023"
    },
    {
      name: "HealthCare Plus",
      logo: "https://i.pinimg.com/736x/64/17/dd/6417dde97e4b4eff51a16405d2a43522.jpg",
      industry: "Kesehatan",
      project: "Website Informasi Kesehatan",
      testimonial: "Desain yang bersih dan informatif.",
      rating: 5,
      year: "2023"
    },
    {
      name: "TravelGo",
      logo: "https://img.freepik.com/premium-vector/detailed-travel-logo-concept_23-2148608467.jpg",
      industry: "Travel",
      project: "Platform Booking Travel",
      testimonial: "Pengalaman pengguna yang luar biasa.",
      rating: 5,
      year: "2023"
    },
    {
      name: "FinTech Solutions",
      logo: "https://img.freepik.com/premium-vector/abstract-fintech-digital-data-payment-modern-overlapping-color-vector-logo-design-illustration_216988-2491.jpg",
      industry: "Finansial",
      project: "Aplikasi Keuangan",
      testimonial: "Keamanan dan performa yang handal.",
      rating: 5,
      year: "2023"
    },
    {
      name: "GreenEnergy",
      logo: "/images/clients/greenenergy.png",
      industry: "Energi",
      project: "Website Perusahaan",
      testimonial: "Komunikasi yang efektif dan hasil yang cepat.",
      rating: 5,
      year: "2023"
    },
    {
      name: "RealEstate Pro",
      logo: "/images/clients/realestate.png",
      industry: "Properti",
      project: "Platform Properti Online",
      testimonial: "Fitur yang lengkap dan mudah digunakan.",
      rating: 5,
      year: "2023"
    },
    {
      name: "CreativeStudio",
      logo: "/images/clients/creative.png",
      industry: "Kreatif",
      project: "Portfolio Website",
      testimonial: "Desain yang kreatif dan unik.",
      rating: 5,
      year: "2023"
    },
    {
      name: "AutoDrive",
      logo: "/images/clients/autodrive.png",
      industry: "Otomotif",
      project: "Platform Penjualan Mobil",
      testimonial: "Sistem yang efisien dan user-friendly.",
      rating: 5,
      year: "2023"
    },
    {
      name: "SportFit",
      logo: "/images/clients/sportfit.png",
      industry: "Olahraga",
      project: "Aplikasi Fitness",
      testimonial: "Membantu meningkatkan engagement pengguna.",
      rating: 5,
      year: "2023"
    },
    {
      name: "LegalTech",
      logo: "/images/clients/legaltech.png",
      industry: "Hukum",
      project: "Sistem Manajemen Kasus",
      testimonial: "Mengoptimalkan workflow tim hukum kami.",
      rating: 5,
      year: "2023"
    },
    {
      name: "AgriTech",
      logo: "/images/clients/agritech.png",
      industry: "Pertanian",
      project: "Platform Monitoring Pertanian",
      testimonial: "Membantu meningkatkan produktivitas pertanian.",
      rating: 5,
      year: "2023"
    },
    {
      name: "MediaHub",
      logo: "/images/clients/mediahub.png",
      industry: "Media",
      project: "Platform Konten Digital",
      testimonial: "Meningkatkan distribusi konten secara signifikan.",
      rating: 5,
      year: "2023"
    },
    {
      name: "LogisticsPro",
      logo: "/images/clients/logistics.png",
      industry: "Logistik",
      project: "Sistem Tracking Pengiriman",
      testimonial: "Mengoptimalkan rantai pasok kami.",
      rating: 5,
      year: "2023"
    },
    {
      name: "BeautyCare",
      logo: "/images/clients/beautycare.png",
      industry: "Kecantikan",
      project: "E-commerce Kosmetik",
      testimonial: "Meningkatkan penjualan online kami.",
      rating: 5,
      year: "2023"
    },
    {
      name: "EventMaster",
      logo: "/images/clients/eventmaster.png",
      industry: "Event",
      project: "Platform Manajemen Event",
      testimonial: "Menyederhanakan proses perencanaan event.",
      rating: 5,
      year: "2023"
    },
    {
      name: "PetCare",
      logo: "/images/clients/petcare.png",
      industry: "Pet Care",
      project: "Aplikasi Perawatan Hewan",
      testimonial: "Membantu pemilik hewan peliharaan dengan mudah.",
      rating: 5,
      year: "2023"
    },
    {
      name: "SmartHome",
      logo: "/images/clients/smarthome.png",
      industry: "Smart Home",
      project: "Aplikasi Kontrol Rumah",
      testimonial: "Membuat hidup lebih nyaman dan efisien.",
      rating: 5,
      year: "2023"
    }
  ];

  const stats = [
    { number: "50+", label: "Proyek Selesai" },
    { number: "95%", label: "Kepuasan Klien" },
    { number: "40+", label: "Industri Berbeda" },
    { number: "100%", label: "On Time Delivery" }
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

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Klien Kami | Portfolio"
        description="Lihat daftar klien yang telah mempercayai layanan kami. Berbagai industri dan proyek yang telah kami kerjakan."
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
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
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
                  Mereka Mempercayai Kami
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 10 }}
                  className="text-xl max-w-3xl mx-auto"
                >
                  Berbagai perusahaan dari berbagai industri telah mempercayai layanan kami
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-4xl font-bold text-teal-600 mb-2"
                    >
                      {stat.number}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-gray-600"
                    >
                      {stat.label}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Clients Section */}
          <div className="py-16">
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
                  >
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="bg-white rounded-xl shadow-lg p-8 h-full border border-gray-100"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="w-20 h-20 rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm relative"
                        >
                          <motion.img
                            src={client.logo}
                            alt={`${client.name} logo`}
                            className="w-full h-full object-contain p-3 hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            crossOrigin="anonymous"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://via.placeholder.com/80?text=Logo";
                            }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-gray-100 animate-pulse"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-center"
                        >
                          <span className="text-yellow-400 mr-1">★</span>
                          <span className="text-gray-600">{client.rating}</span>
                        </motion.div>
                      </div>
                      <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="text-2xl font-bold text-gray-800 mb-2"
                      >
                        {client.name}
                      </motion.h2>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center justify-between mb-4"
                      >
                        <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                          {client.industry}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {client.year}
                        </span>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="text-gray-600 mb-4"
                      >
                        <span className="font-semibold">Proyek:</span> {client.project}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="bg-teal-50 p-4 rounded-lg border border-teal-100"
                      >
                        <p className="text-gray-700 italic">"{client.testimonial}"</p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
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
                Bergabunglah dengan klien-klien terpercaya kami dan wujudkan proyek digital Anda
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-teal-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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