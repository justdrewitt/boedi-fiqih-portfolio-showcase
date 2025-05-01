import React from 'react';
import { motion } from 'framer-motion';
import Seo from '@/components/Seo';
import Footer from '@/components/Footer';

const Home = () => {
  const features = [
    {
      icon: "🚀",
      title: "Pengembangan Web",
      description: "Website modern dan responsif untuk bisnis Anda"
    },
    {
      icon: "📱",
      title: "Aplikasi Mobile",
      description: "Aplikasi mobile untuk iOS dan Android"
    },
    {
      icon: "🎨",
      title: "Desain UI/UX",
      description: "Desain yang menarik dan mudah digunakan"
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
        title="Home | Portfolio"
        description="Selamat datang di portfolio showcase kami"
        url="http://localhost:8080"
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
                  Selamat Datang
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 10 }}
                  className="text-5xl font-bold mb-6"
                >
                  Portfolio Showcase
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 10 }}
                  className="text-xl max-w-3xl mx-auto"
                >
                  Temukan berbagai proyek dan layanan kami
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-[#f13131] transition-colors duration-300"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-4xl mb-4 text-[#f13131]"
                    >
                      {feature.icon}
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-xl font-bold mb-2"
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="text-gray-600"
                    >
                      {feature.description}
                    </motion.p>
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
                Hubungi kami untuk diskusi lebih lanjut tentang proyek Anda
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

export default Home; 