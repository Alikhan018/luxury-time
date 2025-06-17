
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-ivory py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-display font-bold text-charcoal mb-8 text-center"
        >
          Contact Us
        </motion.h1>
        <p className="text-lg text-gray-600 font-inter mb-12 text-center max-w-3xl mx-auto">
          We’re here to assist you with any inquiries about our luxury timepieces. Reach out via email, phone, or visit our showroom.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-xl rounded-xl p-8"
          >
            <h2 className="text-2xl font-display font-bold text-charcoal mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-luxury-gold mr-4" />
                <div>
                  <p className="text-charcoal font-inter font-medium">Email</p>
                  <a
                    href="mailto:info@luxurywatches.com"
                    className="text-gray-600 font-inter hover:text-luxury-gold"
                  >
                    info@luxurywatches.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-luxury-gold mr-4" />
                <div>
                  <p className="text-charcoal font-inter font-medium">Phone</p>
                  <a
                    href="tel:+1-800-555-1234"
                    className="text-gray-600 font-inter hover:text-luxury-gold"
                  >
                    +1-800-555-1234
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-luxury-gold mr-4" />
                <div>
                  <p className="text-charcoal font-inter font-medium">Address</p>
                  <p className="text-gray-600 font-inter">
                    123 Elegance Ave, Luxury City, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Styled, Non-functional) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-xl rounded-xl p-8"
          >
            <h2 className="text-2xl font-display font-bold text-charcoal mb-6">
              Send a Message
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal font-inter mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg font-inter bg-gray-100 cursor-not-allowed"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal font-inter mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg font-inter bg-gray-100 cursor-not-allowed"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal font-inter mb-2">
                  Message *
                </label>
                <textarea
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg font-inter bg-gray-100 cursor-not-allowed"
                  placeholder="Your Message"
                  rows="4"
                />
              </div>
              <button
                disabled
                className="w-full bg-luxury-gold text-charcoal py-2 rounded-lg font-inter font-medium hover:bg-yellow-600 transition-all duration-300 opacity-50 cursor-not-allowed"
              >
                Send Message
              </button>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-white shadow-xl rounded-xl p-8"
        >
          <h2 className="text-2xl font-display font-bold text-charcoal mb-6">
            Visit Us
          </h2>
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-600 font-inter">Map Placeholder (Embed your map here)</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;