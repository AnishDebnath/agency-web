import React from 'react';
import { motion } from 'framer-motion';

const BlogHeader: React.FC = () => {
    return (
        <div className="text-center mb-16 md:mb-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
            >
                <span className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                    <span className="material-symbols-rounded text-sm">edit_note</span> Blog & Resources
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white"
            >
                Creator Insights <span className="text-primary">& Tips</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
                Deep dives into video strategy, editing techniques, and content growth.
            </motion.p>
        </div>
    );
};

export default BlogHeader;
