import React from 'react';
import { motion } from 'framer-motion';
import { categories } from './data';

interface WorkFilterProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const WorkFilter: React.FC<WorkFilterProps> = ({ activeCategory, setActiveCategory }) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
            {categories.map((cat, i) => (
                <motion.button
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-8 py-3 rounded-full text-sm font-bold tracking-tight transition-all duration-300 relative ${activeCategory === cat
                        ? 'text-white'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                >
                    <span className="relative z-10">{cat}</span>
                    {activeCategory === cat && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-[#111] dark:bg-white rounded-full shadow-lg"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    {activeCategory !== cat && (
                        <div className="absolute inset-0 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-full opacity-100" />
                    )}
                </motion.button>
            ))}
        </div>
    );
};

export default WorkFilter;
