import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/Contact/ContactForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [message, setMessage] = useState('');
  const whatsappNumber = '+628567209773';
  const whatsappMessage = encodeURIComponent('Hi, I found your portfolio and would like to discuss a potential collaboration. Here is my message:');

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-teal-600 mb-12 text-center">Get in Touch</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-teal-600 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-teal-600">📍</div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-gray-600">Jakarta, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-teal-600">📧</div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a
                        href="mailto:contact@bmmf.site"
                        className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
                      >
                        contact@bmmf.site
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-teal-600">📱</div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a
                        href="tel:+628567209773"
                        className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
                      >
                        +62 856-7209-773
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-teal-600">⏰</div>
                    <div>
                      <h3 className="font-semibold">Working Hours</h3>
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sat: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-teal-600">💬</div>
                    <div>
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="text-gray-600">+62 856-7209-773</p>
                      <button
                        onClick={openWhatsApp}
                        className="mt-2 inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300"
                      >
                        <span className="ml-2">Message on WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
