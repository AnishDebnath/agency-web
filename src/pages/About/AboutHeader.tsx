import React from 'react';
import { motion } from 'framer-motion';

const AboutHeader: React.FC = () => {
    return (
        <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-2 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
            >
                About CreatorFlow
            </motion.span>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight"
            >
                We’re the <span className="text-primary">secret weapon</span> behind your favorite creators.
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed"
            >
                Founded in 2021, we started with a simple mission: to help creators reclaim their time so they can focus on what they do best—creating.
            </motion.p>
        </div>
    );
};

export default AboutHeader;
