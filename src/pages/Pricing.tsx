import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Seo from '@/components/Seo';
import Footer from '@/components/Footer';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: "Basic",
      price: "Rp 5.500.000",
      description: "Solusi website sederhana untuk bisnis kecil",
      features: [
        "Website 5 halaman",
        "Desain responsif",
        "Formulir kontak",
        "Integrasi media sosial",
        "Optimasi SEO dasar",
        "Dukungan email"
      ],
      popular: false,
      icon: "🚀",
      deliveryTime: "2-3 minggu"
    },
    {
      name: "Professional",
      price: "Rp 10.000.000",
      description: "Paket lengkap untuk bisnis menengah",
      features: [
        "Website 10 halaman",
        "Desain responsif premium",
        "Formulir kontak & newsletter",
        "Integrasi media sosial",
        "Optimasi SEO lengkap",
        "Dukungan email & telepon",
        "Analytics & reporting",
        "Blog section"
      ],
      popular: true,
      icon: "💎",
      deliveryTime: "3-4 minggu"
    },
    {
      name: "Enterprise",
      price: "Rp 50.000.000",
      description: "Solusi custom untuk bisnis besar",
      features: [
        "Website unlimited halaman",
        "Desain custom & responsif",
        "Sistem manajemen konten",
        "Integrasi API & sistem pihak ketiga",
        "Optimasi SEO premium",
        "Dukungan prioritas 24/7",
        "Analytics & reporting lengkap",
        "Blog & forum section",
        "Keamanan premium",
        "Training & dokumentasi"
      ],
      popular: false,
      icon: "🏢",
      deliveryTime: "4-6 minggu"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        title="Harga & Paket | Portfolio"
        description="Pilih paket website yang sesuai dengan kebutuhan bisnis Anda. Mulai dari paket Basic hingga Enterprise dengan fitur lengkap."
        url="http://localhost:8080/pricing"
      />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="text-center mb-16"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="inline-block bg-[#feecec] text-[#f13131] px-3 py-1 rounded-full text-sm font-semibold mb-4"
              >
                Pilihan Paket
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 10 }}
                className="text-4xl font-bold text-gray-800 mb-4"
              >
                Pilih Paket yang Tepat
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 10 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Kami menawarkan berbagai paket untuk memenuhi kebutuhan bisnis Anda
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative ${plan.popular ? 'md:scale-105' : ''}`}
                >
                  {plan.popular && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    >
                      <span className="bg-[#f13131] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Paling Populer
                      </span>
                    </motion.div>
                  )}
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className={`bg-white rounded-xl shadow-lg p-8 h-full ${
                      plan.popular ? 'border-2 border-[#f13131]' : ''
                    } ${selectedPlan === plan.name ? 'ring-2 ring-[#f13131]' : ''}`}
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-4xl mb-4 text-[#f13131]"
                    >
                      {plan.icon}
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-2xl font-bold text-gray-800 mb-2"
                    >
                      {plan.name}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-gray-600 mb-4"
                    >
                      {plan.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="text-4xl font-bold text-[#f13131] mb-2"
                    >
                      {plan.price}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="text-sm text-gray-500 mb-6"
                    >
                      Waktu pengerjaan: {plan.deliveryTime}
                    </motion.div>
                    <motion.ul
                      variants={containerVariants}
                      className="space-y-3 mb-8"
                    >
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          variants={itemVariants}
                          className="flex items-center text-gray-600"
                        >
                          <motion.svg
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.1 + featureIndex * 0.05 }}
                            className="w-5 h-5 text-[#f13131] mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </motion.svg>
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 px-6 rounded-lg font-semibold ${
                        plan.popular
                          ? 'bg-[#f13131] text-white hover:bg-[#dc0f0f]'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      Pilih Paket
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100, damping: 10 }}
              className="mt-16 text-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Butuh Solusi Custom?
              </h2>
              <p className="text-gray-600 mb-6">
                Hubungi kami untuk diskusi kebutuhan spesifik bisnis Anda
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#f13131] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#dc0f0f]"
              >
                Hubungi Kami
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing; 