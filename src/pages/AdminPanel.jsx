import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Watch, Tag, Grid, Receipt } from 'lucide-react';

const AdminPanel = () => {
    const tiles = [
        {
            title: 'Manage Brands',
            icon: Tag,
            path: '/admin/brands',
            description: 'Add, edit, or remove luxury watch brands',
        },
        {
            title: 'Manage Collections',
            icon: Grid,
            path: '/admin/collections',
            description: 'Organize watch collections by brand',
        },
        {
            title: 'Manage Watches',
            icon: Watch,
            path: '/admin/watches',
            description: 'Curate your luxury watch inventory',
        },
        {
            title: "Manage Orders",
            icon: Receipt,
            path: "/admin/order-management",
            description: "View and change status of all orders"
        }
    ];

    return (
        <div className="min-h-screen bg-ivory py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto"
            >
                <div className="mb-12 text-center">
                    <h1 className="text-4xl sm:text-5xl font-display font-bold text-charcoal mb-4">
                        Admin Dashboard
                    </h1>
                    <p className="text-lg text-gray-600 font-inter">
                        Manage your luxury watch boutique
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tiles.map((tile, index) => (
                        <Link to={tile.path} key={tile.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:bg-gradient-to-br hover:from-luxury-gold hover:to-yellow-600 hover:text-charcoal transition-all duration-300"
                            >
                                <tile.icon className="w-12 h-12 text-luxury-gold mb-4 group-hover:text-charcoal" />
                                <h2 className="text-xl font-display font-bold text-charcoal mb-2 group-hover:text-charcoal">
                                    {tile.title}
                                </h2>
                                <p className="text-gray-600 font-inter text-sm group-hover:text-charcoal">
                                    {tile.description}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default AdminPanel;
