import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '@/components/Seo';
import Footer from '@/components/Footer';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Apa saja layanan yang Anda tawarkan?",
    answer: "Kami menawarkan berbagai layanan termasuk pembuatan website, SEO, dan digital marketing. Kami juga menyediakan layanan khusus seperti pembuatan website toko online, company profile, dan website profesional lainnya."
  },
  {
    question: "Berapa biaya pembuatan website?",
    answer: "Biaya pembuatan website bervariasi tergantung pada jenis dan kompleksitas website yang Anda butuhkan. Kami menawarkan harga yang kompetitif dan transparan. Silakan hubungi kami untuk konsultasi gratis dan penawaran yang sesuai dengan kebutuhan Anda."
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
    answer: "Waktu pengerjaan bervariasi tergantung pada kompleksitas proyek. Website sederhana biasanya selesai dalam 1-2 minggu, sedangkan website yang lebih kompleks mungkin membutuhkan waktu 3-4 minggu atau lebih."
  },
  {
    question: "Apakah Anda menyediakan layanan maintenance website?",
    answer: "Ya, kami menyediakan layanan maintenance website yang mencakup pembaruan konten, keamanan, dan optimasi performa. Kami juga menawarkan paket maintenance bulanan untuk memastikan website Anda selalu berjalan optimal."
  },
  {
    question: "Bagaimana proses pembuatan website?",
    answer: "Proses kami dimulai dengan konsultasi untuk memahami kebutuhan Anda, dilanjutkan dengan perancangan, pengembangan, pengujian, dan peluncuran. Kami selalu melibatkan Anda dalam setiap tahap untuk memastikan hasil yang sesuai dengan harapan."
  },
  {
    question: "Apakah website yang dibuat responsive?",
    answer: "Ya, semua website yang kami buat adalah responsive dan dapat diakses dengan baik di berbagai perangkat, mulai dari desktop, tablet, hingga smartphone."
  },
  {
    question: "Apakah Anda menyediakan layanan SEO?",
    answer: "Ya, kami menyediakan layanan SEO lengkap termasuk optimasi on-page, off-page, dan technical SEO. Kami juga menawarkan layanan Google Ads dan social media marketing untuk meningkatkan visibilitas online Anda."
  },
  {
    question: "Bagaimana cara memulai proyek?",
    answer: "Anda dapat menghubungi kami melalui formulir kontak atau langsung menghubungi nomor telepon yang tersedia. Kami akan menjadwalkan konsultasi gratis untuk mendiskusikan kebutuhan dan rencana proyek Anda."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="FAQ - Pertanyaan Umum | Jasa Pembuatan Website & Digital Marketing"
        description="Temukan jawaban untuk pertanyaan umum tentang layanan pembuatan website, SEO, dan digital marketing kami. Informasi lengkap tentang proses, biaya, dan layanan yang kami tawarkan."
        url="http://localhost:8080/faq"
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
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-teal-600 mb-12 text-center"
            >
              Pertanyaan Umum
            </motion.h1>

            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-4"
                >
                  <motion.button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.question}
                      </h3>
                      <motion.span
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-teal-600"
                      >
                        ▼
                      </motion.span>
                    </div>
                  </motion.button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-gray-50 rounded-b-lg">
                          <p className="text-gray-700">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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

export default Faq; 