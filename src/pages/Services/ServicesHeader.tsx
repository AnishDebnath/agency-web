import React from 'react';
import { motion } from 'framer-motion';

const ServicesHeader: React.FC = () => {
    return (
        <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
            >
                Our Services
            </motion.span>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight"
            >
                Everything you need to <span className="text-primary">scale.</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed"
            >
                From raw footage to published masterpiece. We handle the heavy lifting so you can focus on being the face of your brand.
            </motion.p>
        </div>
    );
};

export default ServicesHeader;
