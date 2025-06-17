import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-ivory"
        >
            {/* Hero Section with Gradient */}
            <div className="relative h-[60vh] bg-gradient-to-br from-charcoal via-luxury-gold to-charcoal flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative flex flex-col items-center justify-center text-center px-4">
                    <motion.svg
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-16 h-16 text-ivory mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 10c-2.485 0-4.5-2.015-4.5-4.5S9.515 9 12 9s4.5 2.015 4.5 4.5S14.485 18 12 18z"
                        />
                    </motion.svg>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl sm:text-6xl font-display font-bold text-ivory"
                    >
                        Our Legacy in Time
                    </motion.h1>
                </div>
            </div>

            {/* Story Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="flex justify-center mb-4">
                        <svg
                            className="w-10 h-10 text-luxury-gold"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mb-6">
                        About Us
                    </h2>
                    <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto mb-8">
                        Founded with a passion for horological excellence, our brand is dedicated to curating the world’s finest luxury watches. Each timepiece in our collection embodies craftsmanship, heritage, and timeless elegance.
                    </p>
                </motion.div>

                {/* Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white shadow-xl rounded-xl p-8 flex items-start"
                    >
                        <svg
                            className="w-8 h-8 text-luxury-gold mr-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                        <div>
                            <h3 className="text-2xl font-display font-bold text-charcoal mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 font-inter">
                                To deliver unparalleled quality and sophistication, connecting watch enthusiasts with masterpieces that transcend time.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white shadow-xl rounded-xl p-8 flex items-start"
                    >
                        <svg
                            className="w-8 h-8 text-luxury-gold mr-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <div>
                            <h3 className="text-2xl font-display font-bold text-charcoal mb-4">
                                Our Values
                            </h3>
                            <p className="text-gray-600 font-inter">
                                Integrity, excellence, and innovation guide us in every step, ensuring every watch tells a story of precision and prestige.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Visual Section */}
            <div className="bg-charcoal py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="flex justify-center mb-4">
                            <svg
                                className="w-10 h-10 text-ivory"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-3a1 1 0 011-1h2a1 1 0 011 1v3m-4 0h4"
                                />
                            </svg>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-ivory mb-6">
                            Craftsmanship in Focus
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: 'Craftsmanship', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                                { title: 'Heritage', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
                                { title: 'Elegance', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-start bg-ivory rounded-xl shadow-lg p-6 hover:bg-gradient-to-br hover:from-luxury-gold hover:to-yellow-600 hover:text-charcoal"
                                >
                                    <svg
                                        className="w-8 h-8 text-luxury-gold mr-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d={item.icon}
                                        />
                                    </svg>
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-charcoal mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 font-inter">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;