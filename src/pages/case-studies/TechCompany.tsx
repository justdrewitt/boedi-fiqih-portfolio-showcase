import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import Footer from '@/components/Footer';

const TechCompany = () => {
  const navigate = useNavigate();

  const features = [
    "Responsive Design",
    "Manajemen Konten Modern",
    "Integrasi Sistem HR",
    "Portal Karyawan",
    "Blog & News Section",
    "Analytics Dashboard"
  ];

  const technologies = [
    "React.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Express.js",
    "AWS"
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
        title="Case Study: Website Perusahaan Teknologi | Portfolio"
        description="Studi kasus pembuatan website perusahaan teknologi dengan fitur modern, manajemen konten, dan integrasi sistem HR."
        url="http://localhost:8080/case-studies/tech-company"
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
            <motion.button
              onClick={() => navigate('/case-studies')}
              className="mb-8 flex items-center text-teal-600 hover:text-teal-700"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Case Studies
            </motion.button>

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
                className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold mb-4"
              >
                Company Profile
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 10 }}
                className="text-4xl font-bold text-gray-800 mb-4"
              >
                Website Perusahaan Teknologi
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 10 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Transformasi digital untuk perusahaan teknologi dengan website modern dan sistem terintegrasi
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <motion.div variants={itemVariants}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl shadow-lg p-8 mb-8"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl font-semibold text-gray-800 mb-4"
                  >
                    Tantangan
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 mb-4"
                  >
                    Klien membutuhkan website perusahaan yang modern dengan fitur-fitur berikut:
                  </motion.p>
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="list-disc list-inside text-gray-600 space-y-2"
                  >
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      Tampilan modern dan profesional
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      Sistem manajemen konten yang mudah
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      Integrasi dengan sistem HR internal
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                    >
                      Portal karyawan yang aman
                    </motion.li>
                  </motion.ul>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 }}
                    className="text-2xl font-semibold text-gray-800 mb-4"
                  >
                    Solusi
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-gray-600 mb-4"
                  >
                    Kami mengembangkan website dengan fitur-fitur berikut:
                  </motion.p>
                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-2 gap-4"
                  >
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center bg-gray-50 p-3 rounded-lg"
                      >
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.3 + index * 0.1 }}
                          className="w-5 h-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </motion.svg>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.4 + index * 0.1 }}
                          className="text-gray-700"
                        >
                          {feature}
                        </motion.span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl shadow-lg p-8 mb-8"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-2xl font-semibold text-gray-800 mb-4"
                  >
                    Hasil
                  </motion.h2>
                  <motion.div
                    variants={containerVariants}
                    className="space-y-6"
                  >
                    {[
                      { title: "Peningkatan Traffic", value: "300%", description: "Peningkatan traffic website dalam 3 bulan pertama" },
                      { title: "Waktu Loading", value: "70%", description: "Pengurangan waktu loading website" },
                      { title: "Kepuasan Karyawan", value: "95%", description: "Kepuasan karyawan terhadap portal internal" }
                    ].map((result, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-teal-50 p-6 rounded-lg"
                      >
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.6 + index * 0.2 }}
                          className="text-xl font-semibold text-teal-800 mb-2"
                        >
                          {result.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.7 + index * 0.2 }}
                          className="text-3xl font-bold text-teal-600"
                        >
                          {result.value}
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.8 + index * 0.2 }}
                          className="text-gray-600 mt-2"
                        >
                          {result.description}
                        </motion.p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2 }}
                    className="text-2xl font-semibold text-gray-800 mb-4"
                  >
                    Teknologi yang Digunakan
                  </motion.h2>
                  <motion.div
                    variants={containerVariants}
                    className="flex flex-wrap gap-3"
                  >
                    {technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, backgroundColor: "#0D9488" }}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm cursor-pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default TechCompany; 