import React from 'react';
import { motion } from 'framer-motion';

const AboutHeader: React.FC = () => {
    return (
        <div className="text-center mb-20 md:mb-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block mb-8 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
            >
                <span className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                    <span className="material-symbols-rounded text-sm">rocket_launch</span> Our Mission
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter leading-[1.05] text-[#111] dark:text-white mb-10"
            >
                <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6">
                    <span>We’re the</span>
                    <motion.span
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        className="relative inline-flex w-20 h-12 md:w-32 md:h-16 lg:w-40 lg:h-20 rounded-full overflow-hidden items-center justify-center bg-orange-100 align-middle shadow-inner"
                    >
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover opacity-90" alt="Magic" />
                    </motion.span>
                    <span className="text-primary italic">Secret</span>
                </div>
                <div>Weapon Behind Creators.</div>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-10 leading-relaxed font-medium px-4"
            >
                Founded in 2021, we started with a simple mission: to help creators reclaim their time so they can focus on what they do best—creating.
            </motion.p>
        </div>
    );
};

export default AboutHeader;
